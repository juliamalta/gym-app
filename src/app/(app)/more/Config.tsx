import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import * as ImagePicker from 'expo-image-picker'
import { Stack } from 'expo-router'
import { router } from 'expo-router'
import { getItem } from 'expo-secure-store'
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useState, useEffect } from 'react'
import { TouchableOpacity, TextInput, StyleSheet, Alert, View, Image } from 'react-native'
import { FlatList } from 'react-native'
import { Avatar, YStack, Text, XStack, YGroup, XGroup } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import { Card } from '@/components/core/CardPainel'
import CardsPainel from '@/components/core/CardPainel/CardPainel'
import { HeaderSignOut } from '@/components/layout/HeaderSignOut'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'

import { auth, database, storage } from '../../../firebaseConfig'

export default function Config() {
    const [name, setName] = useState('')
    const [userConfig, setUserConfig] = useState(null)
    const [userEmail, setUserEmail] = useState<string | null>(null)
    const [image, setImage] = useState('')
    const [progress, setProgress] = useState(0)
    const [files, setFiles] = useState<any[]>([])
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
                setUserConfig(userData[0])
            } else {
                setUserConfig(null)
            }
        })

        return () => unsubscribe()
    }, [userId])
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, 'files'), (snapshot) => {
            const updatedFiles = []
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const file = change.doc.data()
                    if (file.userId === userId) {
                        // Only include files for the current user
                        updatedFiles.push(file)
                    }
                }
            })
            setFiles(updatedFiles)
        })

        return () => unsubscribe()
    }, [userId])
    async function pickImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        })
        if (!result.canceled) {
            setImage(result.assets[0].uri)
            await uploadImage(result.assets[0].uri, 'image')
        }
    }

    async function uploadImage(uri, fileType) {
        const response = await fetch(uri)
        const blob = await response.blob()
        const storageRef = ref(storage, 'UserImage/' + new Date().getTime())
        const uploadTask = uploadBytesResumable(storageRef, blob)

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + progress + '% done')
                setProgress(progress.toFixed())
            },
            (error) => {
                console.error('Upload failed:', error)
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                console.log('File Available at', downloadURL)
                await saveRecord(fileType, downloadURL, new Date().toISOString())
                setImage('')
            }
        )
    }

    async function saveRecord(fileType, url, createdAt) {
        try {
            const docRef = await addDoc(collection(database, 'files'), {
                fileType,
                url,
                createdAt,
                userId,
            })
            console.log('Document saved correctly', docRef.id)
        } catch (e) {
            console.error('Error saving document:', e)
        }
    }
    useProtectedRoute()
    const menuBox: BoxDetailItemProps[] = [
        {
            link: appPath.TypeTrainer.shoulders,
            icon: <MaterialIcons name="emoji-people" size={24} color="white" />,
            name: 'Mediçoes',
        },
        {
            link: appPath.projects.index,
            icon: <MaterialIcons name="sports-gymnastics" size={24} color="white" />,
            name: 'All Exercises ',
        },
    ]

    return (
        <ScreenTemplate
            options={{
                title: 'Config',
                header: () => <HeaderSignOut title={'Config'} />,
            }}>
            <Stack.Screen />

            <YStack bg="#0a0a0a" width="100%" height="100%" f={1}>
                <YStack bg="#262626" minHeight={200} mt={16}>
                    <YStack pt={16}>
                        <YStack jc="center" ai="center">
                            <FlatList
                                data={files}
                                keyExtractor={(item) => item.url} // Ensure 'url' is unique
                                renderItem={({ item }) => (
                                    <XStack>
                                        {userId === item.userId ? ( // Check if the item belongs to the current user
                                            <Avatar circular size="$7">
                                                <Avatar.Image accessibilityLabel="User image" src={{ uri: item.url }} />
                                                <Avatar.Fallback backgroundColor="$blue10" />
                                            </Avatar>
                                        ) : (
                                            <Avatar circular size="$10">
                                                <Avatar.Image
                                                    accessibilityLabel="Default image"
                                                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                                                />
                                                <Avatar.Fallback backgroundColor="$blue10" />
                                            </Avatar>
                                        )}
                                    </XStack>
                                )}
                            />

                            <XStack pt={5}>
                                <TouchableOpacity onPress={pickImage}>
                                    <AntDesign name="upload" size={24} color="white" />
                                </TouchableOpacity>
                            </XStack>
                        </YStack>
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
                        <YStack p={8}>
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
                    <YStack>
                        <YStack p={8}>
                            <Text color="white" textAlign="left">
                                Painel
                            </Text>
                        </YStack>
                        <XGroup style={styles.gridContainer}>
                            {menuBox.map((item, index) => (
                                <YGroup.Item key={index} style={styles.gridItem}>
                                    <TouchableOpacity onPress={() => router.push(item.link as never)}>
                                        <CardsPainel name={item.name} icon={item.icon} />
                                    </TouchableOpacity>
                                </YGroup.Item>
                            ))}
                        </XGroup>
                    </YStack>
                    <XStack p={16} mt={16}>
                        <TouchableOpacity style={styles.button} onPress={changeName}>
                            <Text color="white">Save Changes</Text>
                        </TouchableOpacity>
                    </XStack>
                    <XStack m="auto">
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
        backgroundColor: '#262626', // Dark background color
        padding: 16,
        borderRadius: 40,
        alignItems: 'center',
        marginBottom: 10,
    },
    gridContainer: {
        flexDirection: 'row', // Exibe itens em linha
        flexWrap: 'wrap', // Quebra a linha após dois itens
        justifyContent: 'space-between', // Espaço entre os itens
        paddingHorizontal: 38,
    },
    gridItem: {
        width: '48%', // Cada item ocupa quase metade da largura
        marginBottom: 16, // Espaço entre as linhas
        backgroundColor: '#262626',
        padding: 16,

        borderRadius: 8,
        alignItems: 'center', // Centraliza os itens dentro de cada box
    },
    itemText: {
        color: 'white',
        marginTop: 8,
    },
})
