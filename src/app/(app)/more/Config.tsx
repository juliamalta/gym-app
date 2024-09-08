import { Entypo } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
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

            <YStack bg="#0a0a0a" width="100%" height="100%" f={1}>
                <YStack>
                    <Text color="white" fontSize={20} textAlign="center">
                        Edit my profile
                    </Text>
                </YStack>
                <YStack bg="#262626" minHeight={200} mt={16}>
                    <YStack pt={16}>
                        <XStack jc="center">
                            <Avatar size={80} circular space="$2">
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                                />
                                <Avatar.Fallback backgroundColor="$gray5" />
                            </Avatar>
                        </XStack>
                        <YStack mt={16}>
                            <Text fontSize={20} lineHeight={24} fontWeight="500" color="white" textAlign="center">
                                {userConfig ? userConfig.name : 'No name set'}
                            </Text>
                            <Text color="white" textAlign="center">
                                {userEmail ? userEmail : 'Guest'}
                            </Text>
                        </YStack>
                    </YStack>
                </YStack>
                <YStack>
                    <YStack p={16}>
                        <YStack p={16}>
                            <Text color="white" textAlign="left">
                                Display name
                            </Text>
                        </YStack>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Enter your name user ex: @user"
                            placeholderTextColor="white"
                            style={{
                                padding: 10,
                                color: 'white',
                                backgroundColor: '#262626',
                                borderRadius: 8,
                                marginBottom: 10,
                                width: 350,
                            }}
                        />
                    </YStack>
                    <XStack p={16}>
                        <TouchableOpacity style={styles.button} onPress={changeName}>
                            <Text color="white">Save Changes</Text>
                        </TouchableOpacity>
                    </XStack>
                    <XStack p={16} m="auto">
                        <TouchableOpacity>
                            <Text color="#3b82f6">Cancel</Text>
                        </TouchableOpacity>
                    </XStack>
                </YStack>
            </YStack>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#262626', // Purple color
        padding: 16,

        borderRadius: 40,
        marginRight: 'auto',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
})
