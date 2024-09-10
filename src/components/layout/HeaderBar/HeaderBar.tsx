import { Feather, Octicons } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link, usePathname } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { collection, onSnapshot, deleteDoc, query, where, QuerySnapshot, updateDoc, addDoc } from 'firebase/firestore'
import { useAtomValue } from 'jotai'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, View, XStack, YStack } from 'tamagui'
import { Avatar } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import useAtomWithModal from '@/hooks/useAtomWithModal'
import { appStore } from '@/store/app.atoms'
import { modalStore } from '@/store/modal.atoms'

import { database, storage } from '../../../firebaseConfig'
import { auth } from '../../../firebaseConfig' // import your Firebase config

export default function HeaderBar({ title }: { title?: string }) {
    const { isOpened, toggle } = useAtomWithModal(modalStore.orgModalAtom)
    const selectOrg = useAtomValue(appStore.selectedOrg)
    const pathname = usePathname()
    const insets = useSafeAreaInsets()
    const [files, setFiles] = useState<any[]>([])
    const [userEmail, setUserEmail] = useState<string | null>(null)
    const [userConfigs, setUserConfigs] = useState({})
    const user = auth.currentUser
    const userId = user ? user.email : 'Guest'

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email) // Set the user's email if logged in
            } else {
                setUserEmail(null) // No user logged in
            }
        })

        return () => unsubscribe() // Cleanup subscription on unmount
    }, [])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, 'files'), (snapshot) => {
            const updated = []
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const file = change.doc.data()
                    if (file.userId === userId) {
                        // Only include files for the current user
                        updated.push(file)
                    }
                }
            })
            console.log('Updated files:', updated)
            setFiles(updated)
        })

        return () => unsubscribe()
    }, [userId])
    useEffect(() => {
        const userConfigRef = collection(database, 'UserConfig')

        const unsubscribe = onSnapshot(userConfigRef, (querySnapshot) => {
            const userMap = {}
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                userMap[data.userId] = data.name // Mapeia userId -> name
            })
            console.log('User configs:', userMap) // Verifique o conteúdo aqui
            setUserConfigs(userMap)
        })

        return () => unsubscribe()
    }, [])

    return (
        <XStack
            pressStyle={{ backgroundColor: '$secondary' }}
            backgroundColor="$secondary"
            width="100%"
            pt={insets.top * 2}
            px={16}
            pb={10}>
            <StatusBar style="light" />

            {(pathname === appPath.projects.index || pathname === appPath.salesOrders.index) && (
                <>
                    <Link href={appPath.notifications}>
                        <View w={24}>
                            <Feather color="white" name="bell" size={24} />
                        </View>
                    </Link>
                    <Text
                        textAlign="center"
                        color="white"
                        fontSize={16}
                        fontWeight="500"
                        lineHeight={24}
                        mx="auto"
                        alignItems="center">
                        {title}
                    </Text>
                    <Link href={appPath.filter}>
                        <View w={24}>
                            <Octicons name="filter" size={24} color="white" />
                        </View>
                    </Link>
                </>
            )}
            {pathname === appPath.dashboard && (
                <>
                    <XStack
                        borderRadius={8}
                        pressStyle={{ opacity: 0.5 }}
                        mr="auto"
                        pt={20}
                        ai="center"
                        gap={4}
                        onPress={toggle}>
                        <XStack>
                            <FlatList
                                data={files}
                                keyExtractor={(item) => item.userId}
                                renderItem={({ item }) => {
                                    console.log('Current userId:', userId) // Verifique o valor aqui
                                    console.log('Item userId:', item.userId) // Verifique o valor aqui
                                    return (
                                        <XStack>
                                            {userId === item.userId ? (
                                                <Avatar circular size="$7">
                                                    <Avatar.Image
                                                        accessibilityLabel="User image"
                                                        src={{ uri: item.url }}
                                                    />
                                                    <Avatar.Fallback backgroundColor="$blue10" />
                                                </Avatar>
                                            ) : (
                                                <Avatar circular size="$8">
                                                    <Avatar.Image
                                                        accessibilityLabel="Default image"
                                                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                                                    />
                                                    <Avatar.Fallback backgroundColor="$blue10" />
                                                </Avatar>
                                            )}
                                            <XStack ai="center">
                                                <Text fontSize={20} color="white" pl={10}>
                                                    {userConfigs[item.userId] || 'No name set'}
                                                </Text>
                                            </XStack>
                                        </XStack>
                                    )
                                }}
                            />
                        </XStack>
                    </XStack>
                    <View ml="auto" pt={40}>
                        <MaterialIcons name="logout" size={30} color="white" />
                    </View>
                </>
            )}
        </XStack>
    )
}
