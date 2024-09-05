import { Feather, FontAwesome } from '@expo/vector-icons'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Separator, Square, Text, View, XStack } from 'tamagui'

import SheetModal from '@/components/overlay/SheetModal/SheetModal'
import useAtomWithModal from '@/hooks/useAtomWithModal'
import { appStore } from '@/store/app.atoms'
import { modalStore } from '@/store/modal.atoms'

export default function SelectOrgModal() {
    const { close } = useAtomWithModal(modalStore.orgModalAtom)
    const [selectedOrg, setSelectedOrg] = useAtom(appStore.selectedOrg)
    const [selected, setSelected] = useState(() => selectedOrg)
    const { t } = useTranslation('common')
    const insets = useSafeAreaInsets()
    const { height } = useWindowDimensions()

    const onApply = () => {
        setSelectedOrg(selected)
        close()
    }
    return (
        <SheetModal
            handle={false}
            modal
            initialPosition={100 - ((insets.top * 2 + 29) / height) * 100}
            atom={modalStore.orgModalAtom}>
            <XStack bg="$colors.secondary" p={16} jc="space-between" ai="center">
                <Text fontSize={13} fontWeight="500" color="white" onPress={close}>
                    {t('cancel')}
                </Text>
                <Text fontSize={16} fontWeight="500" color="white">
                    {t('organization')}
                </Text>
                <Text fontSize={13} fontWeight="500" color="white" onPress={onApply}>
                    {t('apply')}
                </Text>
            </XStack>
            <View px={16} py={8}>
                <FlatList
                    data={['Organization 1', 'Organization 2', 'Organization 3']}
                    renderItem={({ item }) => (
                        <>
                            <XStack
                                p="$2"
                                ai="center"
                                gap={8}
                                pressStyle={{ opacity: 0.5 }}
                                onPress={() => setSelected(item)}>
                                <Square borderRadius={8} p={8} borderWidth={1} borderColor="#777">
                                    <FontAwesome name="building-o" size={16} color="#777" />
                                </Square>
                                <Text>{item}</Text>
                                {selected === item && (
                                    <Text ml="auto" color="$colors.secondary">
                                        <Feather name="check" size={24} />
                                    </Text>
                                )}
                            </XStack>
                            <Separator />
                        </>
                    )}
                />
            </View>
        </SheetModal>
    )
}
