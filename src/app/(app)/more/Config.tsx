import { Entypo } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Stack } from 'expo-router'
import { collection, addDoc, query, where } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { TouchableOpacity, TextInput, StyleSheet, Alert, ScrollView, View } from 'react-native'
import { Avatar, YStack, Text, XStack } from 'tamagui'

import { HeaderSignOut } from '@/components/layout/HeaderSignOut'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

import { auth, database } from '../../../firebaseConfig'

export default function Config() {
    const [name, setName] = useState('')
    const [userConfig, setUserConfig] = useState(null) // Store a single user's config
    const [userEmail, setUserEmail] = useState<string | null>(null)

    const user = auth.currentUser
    const userId = user ? user.email : null

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email)
            } else {
                setUserEmail(null)
            }
        })

        return () => unsubscribe()
    }, [])

    const changeName = async () => {
        if (!name.trim()) {
            Alert.alert('Error', 'Name cannot be empty')
            return
        }

        try {
            await addDoc(collection(database, 'UserConfig'), {
                name,
                userId,
            })
            setName('') // Clear the input field
        } catch (error) {
            console.error('Error adding user config:', error)
        }
    }

    useEffect(() => {
        if (!userId) return

        const userConfigQuery = query(collection(database, 'UserConfig'), where('userId', '==', userId))

        const unsubscribe = onSnapshot(userConfigQuery, (querySnapshot) => {
            const userData = []
            querySnapshot.forEach((doc) => {
                userData.push({ ...doc.data(), id: doc.id })
            })

            if (userData.length > 0) {
                setUserConfig(userData[0]) // Assuming one config per user
            } else {
                setUserConfig(null)
            }
        })

        return () => unsubscribe()
    }, [userId])

    return (
        <ScreenTemplate
            options={{
                title: 'Config',
                header: () => <HeaderSignOut title={'Config'} />,
            }}>
            <Stack.Screen />

            <YStack bg="#0a0a0a" jc="center" ai="center" width="100%" height="100%">
                <Text color="white" fontSize={20}>
                    Config our User
                </Text>
                <YStack ai="center">
                    <YStack
                        borderRadius={8}
                        width="100%"
                        paddingTop={8}
                        paddingRight={16}
                        paddingBottom={8}
                        paddingLeft={8}
                        ac="center"
                        ai="center">
                        <YStack>
                            <TouchableOpacity>
                                <Avatar size={90} circular space="$2">
                                    <Avatar.Image
                                        accessibilityLabel="Cam"
                                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                                    />
                                    <Avatar.Fallback backgroundColor="$gray5" />
                                </Avatar>
                                <XStack jc="center" pt={16}>
                                    <AntDesign name="upload" size={24} color="white" />
                                </XStack>
                            </TouchableOpacity>
                        </YStack>
                        <View ml={16} pt={5}>
                            <Text fontSize={20} lineHeight={24} fontWeight="500" color="white">
                                {userConfig ? userConfig.name : 'No name set'}
                            </Text>
                            <Text color="white">{userEmail ? userEmail : 'Guest'}</Text>
                        </View>
                    </YStack>
                    <YStack pt={20}>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Enter your name user ex: @user"
                            style={{
                                padding: 10,
                                backgroundColor: '#f1f1f1',
                                borderRadius: 8,
                                marginBottom: 10,
                                width: 350,
                            }}
                        />
                        <TouchableOpacity style={styles.button} onPress={changeName}>
                            <Text fontSize={16} color="#ffff">
                                Save Change
                            </Text>
                        </TouchableOpacity>
                    </YStack>
                </YStack>
            </YStack>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3b0764', // Purple color
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
})
