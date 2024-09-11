import Entypo from '@expo/vector-icons/Entypo'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker'
import { collection, onSnapshot, deleteDoc, query, where, QuerySnapshot, updateDoc, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { TouchableOpacity, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { XStack, YStack, Text } from 'tamagui'
import { Avatar } from 'tamagui'

import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

import { auth } from '../../../firebaseConfig'
import { database, storage } from '../../../firebaseConfig'

export default function NewChat() {
    const [description, setDescription] = useState('')
    const [comment, setcomment] = useState('')
    const [like, setlike] = useState(0)
    const [formVisible, setFormVisible] = useState(true)
    const [image, setImage] = useState('')
    const [progress, setProgress] = useState(0)
    const [files, setFiles] = useState<any[]>([])
    const [filesChat, setFilesChat] = useState<any[]>([])
    const user = auth.currentUser
    const userId = user ? user.email : null

    const addChat = async () => {
        if (!description.trim()) {
            Alert.alert('Error', 'Description cannot be empty')
            return
        }

        try {
            await addDoc(collection(database, 'Chats'), {
                description,
                userId,
                comment,
                like,
                createdAt: new Date(),
                // Add other fields as necessary
            })
            setDescription('') // Clear the input field
            setFormVisible(false) // Hide the form
        } catch (error) {
            console.error('Error adding chat:', error)
        }
    }
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
        const unsubscribe = onSnapshot(collection(database, 'filesChat'), (snapshot) => {
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
            setFilesChat(updated)
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
        const storageRef = ref(storage, 'ChatImage/' + new Date().getTime())
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
            const docRef = await addDoc(collection(database, 'filesChat'), {
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

    return (
        <ScreenTemplate
            options={{
                title: 'New Chat',
                header: () => <ChatHeader title={'New Chat'} />,
            }}>
            <XStack f={1} p={16} alignItems="center" justifyContent="center" bg="#0a0a0a">
                {formVisible ? (
                    <YStack w="100%" minHeight={400} h={400} p={16} bg="#171717" borderRadius={8}>
                        <XStack justifyContent="space-between" ai="center">
                            <TouchableOpacity onPress={() => setFormVisible(false)}>
                                <Text color="#60a5fa">Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={addChat}>
                                <Text fontSize={12} color="#60a5fa">
                                    Post
                                </Text>
                            </TouchableOpacity>
                        </XStack>
                        <XStack>
                            <FlatList
                                data={files}
                                keyExtractor={(item) => item.userId}
                                renderItem={({ item }) => (
                                    <XStack>
                                        {userId === item.userId ? (
                                            <Avatar circular size="$7">
                                                <Avatar.Image accessibilityLabel="User image" src={{ uri: item.url }} />
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
                                        <TextInput
                                            value={description}
                                            onChangeText={setDescription}
                                            placeholderTextColor="#52525b"
                                            placeholder="What´s up?"
                                            style={{
                                                padding: 10,
                                                backgroundColor: 'transparent',
                                                marginRight: 'auto',
                                                borderRadius: 8,
                                                marginBottom: 10,
                                                color: '#fafaf9',
                                            }}
                                        />
                                    </XStack>
                                )}
                            />
                        </XStack>
                        <FlatList
                            data={filesChat}
                            keyExtractor={(item) => item.userId}
                            renderItem={({ item }) => (
                                <XStack>
                                    <Image source={{ uri: item.url }} style={styles.image} />
                                </XStack>
                            )}
                        />

                        <XStack mt="auto" ml="auto" pt={10}>
                            <TouchableOpacity onPress={pickImage}>
                                <Entypo name="image" size={24} color="#60a5fa" />
                            </TouchableOpacity>
                        </XStack>
                    </YStack>
                ) : (
                    <XStack f={1} p={16} alignItems="center" justifyContent="center" bg="#0a0a0a">
                        <Text fontSize={20} color="white">
                            Post added successfully!
                        </Text>
                    </XStack>
                )}
            </XStack>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#262626', // Purple color
        padding: 15,

        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 400,
        margin: 5,
        borderRadius: 8,
        resizeMode: 'cover',
    },
})
