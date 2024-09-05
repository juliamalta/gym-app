import { useAtom, useAtomValue } from 'jotai'
import { useCallback, useEffect, useRef, useState } from 'react'
import MapView, { Marker, Region } from 'react-native-maps'

import { isOnView } from '@/common/utils/map.utils'
import useTypeColor from '@/hooks/useTypeColor'
import { enterpriseStore } from '@/store/enterprise.atoms'
import { positionStore } from '@/store/position.atoms'

import { MapCompProps } from './MapComp.types'

export default function MapComp({ marker, withRef = false, bounds = false }: MapCompProps) {
    const { getColorForTipoId } = useTypeColor()
    const [, setCoords] = useAtom(enterpriseStore.selectedCoords)
    const position = useAtomValue(positionStore.userPosition)
    const [, setViewRegion] = useAtom(positionStore.viewRegion)

    const mapRef = useRef<MapView>(null)
    const [currentRegion, setCurrent] = useState<Region | null>({
        latitude: position?.coords.latitude as number,
        longitude: position?.coords.longitude as number,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    })

    useEffect(() => {
        if (withRef) {
            mapRef.current?.animateCamera({
                center: position?.coords,
            })
        }
    }, [position, withRef])

    const getBoundingBoxCallback = useCallback(() => {
        if (bounds && currentRegion && marker) {
            const boundingCoords = mapRef.current?.boundingBoxForRegion(currentRegion as Region)
            setViewRegion(boundingCoords)
            if (boundingCoords) {
                const enterprises = isOnView({ boundingCoords, coords: marker })
                if (enterprises) {
                    setCoords(enterprises)
                }
            }
        }
    }, [bounds, marker, currentRegion, mapRef, setViewRegion, setCoords])

    /*
     ** This function get the Region that is being displayed on the screen only when user change it with gesture
        I'll create a atom state to store this info to be used on 'Adicionar roteiros' flow
     */
    const onRegionChange = async (region: Region) => {
        setCurrent(region)
        if (bounds && marker) {
            getBoundingBoxCallback()
        }
    }

    return (
        <>
            {position && (
                <MapView
                    ref={mapRef}
                    style={{ flex: 1, width: '100%', height: '100%' }}
                    showsUserLocation
                    onMapLoaded={getBoundingBoxCallback}
                    onRegionChangeComplete={(region) => onRegionChange(region)}
                    initialRegion={{
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}>
                    {marker &&
                        marker.map(({ TXT_STYLEURL, CRM_EMPR_NOME, CRM_EMP_TIPO_ID }, index) => {
                            if (TXT_STYLEURL.length > 0)
                                return (
                                    <Marker
                                        key={index}
                                        title={
                                            CRM_EMPR_NOME.length < 25
                                                ? CRM_EMPR_NOME
                                                : `${CRM_EMPR_NOME.slice(0, 24)}...`
                                        }
                                        pinColor={CRM_EMP_TIPO_ID && getColorForTipoId(CRM_EMP_TIPO_ID)}
                                        coordinate={{
                                            latitude: Number(TXT_STYLEURL.split(',')[0]),
                                            longitude: Number(TXT_STYLEURL.split(',')[1]),
                                        }}
                                    />
                                )
                        })}
                </MapView>
            )}
        </>
    )
}
