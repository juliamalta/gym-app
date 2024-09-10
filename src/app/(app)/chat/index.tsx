import { FontAwesome } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link } from 'expo-router'
import { router } from 'expo-router'
import { collection, onSnapshot, deleteDoc, query, where, QuerySnapshot, updateDoc, addDoc } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Modal, Alert, StyleSheet, TextInput } from 'react-native'
import { FlatList } from 'react-native'
import { XStack, View, Text, YGroup, YStack, XGroup } from 'tamagui'
import { Avatar } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'

import { auth, database } from '../../../firebaseConfig'

export default function Chat() {
    useProtectedRoute()
    const menuBox: BoxDetailItemProps[] = [
        {
            link: appPath.chat.newchat,
            icon: <Entypo name="new-message" size={24} color="white" />,
        },
    ]
    const [filesImg, setFilesImg] = useState<any[]>([])
    const [files, setFiles] = useState<any[]>([])
    const [comment, setComment] = useState('')
    const [like, setLike] = useState([])
    const [userConfigs, setUserConfigs] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const user = auth.currentUser
    const [totalCount, setTotalCount] = useState(0)
    const userId = user ? user.email : null
    const [chat, setChat] = useState([])
    useEffect(() => {
        // Reference to the 'Chats' collection
        const chatCollectionRef = collection(database, 'Chats')

        // Set up the real-time listener
        const unsubscribe = onSnapshot(chatCollectionRef, (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            console.log('Fetched chat data: ', list)
            setChat(list)
        })

        // Clean up the listener on component unmount
        return () => unsubscribe()
    }, [])

    const deleteChat = async (chatId) => {
        try {
            await deleteDoc(doc(database, 'Chats', chatId))
            console.log('Chat deleted successfully')
        } catch (error) {
            console.error('Error deleting chat:', error)
        }
    }

    useEffect(() => {
        const userConfigRef = collection(database, 'UserConfig')

        const unsubscribe = onSnapshot(userConfigRef, (querySnapshot) => {
            const userMap = {}
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                userMap[data.userId] = data.name // Mapeia userId -> name
            })
            setUserConfigs(userMap)
        })

        return () => unsubscribe()
    }, [])

    const handleLike = async (chatId, currentLikeCount) => {
        try {
            const chatDocRef = doc(database, 'Chats', chatId)
            await updateDoc(chatDocRef, {
                like: currentLikeCount + 1,
            })
            console.log('Chat liked successfully')
        } catch (error) {
            console.error('Error liking chat:', error)
        }
    }
    const addChat = async () => {
        if (!comment.trim()) {
            Alert.alert('Error', 'Description cannot be empty')
            return
        }

        try {
            await addDoc(collection(database, 'Chats'), {
                userId,
                comment,

                // Add other fields as necessary
            })
            setComment('') // Clear the input field
        } catch (error) {
            console.error('Error adding chat:', error)
        }
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, 'files'), (snapshot) => {
            const userFiles = {}

            snapshot.docChanges().forEach((change) => {
                const file = change.doc.data()

                if (file.userId) {
                    // Handle added files
                    if (change.type === 'added') {
                        userFiles[file.userId] = file.url
                    }

                    // Handle modified files
                    if (change.type === 'modified') {
                        userFiles[file.userId] = file.url
                    }

                    // Handle removed files
                    if (change.type === 'removed') {
                        delete userFiles[file.userId]
                    }
                }
            })

            console.log('Updated user files:', userFiles)
            setFiles(userFiles)
        })

        return () => unsubscribe()
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
            setFilesImg(updated)
        })

        return () => unsubscribe()
    }, [userId])

    return (
        <ScreenTemplate
            options={{
                title: 'Chat',
                header: () => <ChatHeader title={'Social'} />,
            }}>
            <YStack f={1} mr="auto" bg="#0a0a0a">
                <XGroup gap={20} pt={20} mb={25} ml={16}>
                    <FlatList
                        data={filesImg}
                        keyExtractor={(item) => item.userId}
                        renderItem={({ item }) => (
                            <XStack>
                                {userId === item.userId ? (
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
                                <YStack mr="auto" p={16}>
                                    <Text color="white">{userConfigs[item.userId] ?? 'User.name'}</Text>
                                    <Text color="white">What’s up?</Text>
                                </YStack>
                                <XGroup ai="center" ml="auto" mr={10} p={16}>
                                    {menuBox.map((item, index) => (
                                        <YGroup.Item key={index}>
                                            <TouchableOpacity onPress={() => router.push(item.link as never)}>
                                                {item.icon}
                                            </TouchableOpacity>
                                        </YGroup.Item>
                                    ))}
                                </XGroup>
                            </XStack>
                        )}
                    />
                </XGroup>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={chat}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <XStack ml="auto" p={16} mt={3} jc="space-between" f={1} bg="#171717" style={{ width: '100%' }}>
                            <XStack gap={10}>
                                <Avatar circular size="$5">
                                    <Avatar.Image
                                        accessibilityLabel="User image"
                                        src={
                                            files[item.userId] || // Direct lookup in the files object
                                            'https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80' // Default image
                                        }
                                    />
                                    <Avatar.Fallback backgroundColor="$blue10" />
                                </Avatar>
                                <YStack ac="center">
                                    <Text textAlign="left" color="white">
                                        {userConfigs[item.userId] ?? item.userId}
                                    </Text>
                                    <Text textAlign="left" color="white">
                                        {item.description}
                                    </Text>
                                    <Text textAlign="left" color="white">
                                        {item.comment}
                                    </Text>

                                    <XStack f={1} pt={20} gap={90}>
                                        <Modal
                                            animationType="slide"
                                            transparent={true}
                                            visible={modalVisible}
                                            onRequestClose={() => {
                                                Alert.alert('Modal has been closed.')
                                                setModalVisible(!modalVisible)
                                            }}>
                                            <View style={styles.centeredView}>
                                                <View style={styles.modalView}>
                                                    <XStack jc="space-between" ai="center">
                                                        <XStack>
                                                            <TouchableOpacity
                                                                onPress={() => setModalVisible(!modalVisible)}>
                                                                <Text style={styles.textStyle}>Fechar</Text>
                                                            </TouchableOpacity>
                                                        </XStack>
                                                        <XStack>
                                                            <TouchableOpacity style={styles.button} onPress={addChat}>
                                                                <Text fontSize={16} color="#ffff">
                                                                    Add Comment
                                                                </Text>
                                                            </TouchableOpacity>
                                                        </XStack>
                                                    </XStack>
                                                    <XStack ml={16}>
                                                        <Avatar size={40} circular space="$2">
                                                            <Avatar.Image
                                                                accessibilityLabel="Cam"
                                                                src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                                                            />
                                                            <Avatar.Fallback backgroundColor="$gray5" />
                                                        </Avatar>
                                                        <TextInput
                                                            value={comment}
                                                            onChangeText={setComment}
                                                            placeholder="Enter your comment"
                                                            style={{
                                                                padding: 10,
                                                                backgroundColor: 'transparent',
                                                                borderRadius: 8,
                                                                marginBottom: 20,
                                                                width: 300,
                                                                color: '#fafaf9',
                                                            }}
                                                        />
                                                    </XStack>
                                                </View>
                                            </View>
                                        </Modal>
                                        <XStack gap={4}>
                                            <TouchableOpacity onPress={() => handleLike(item.id, item.like)}>
                                                <XStack gap={10}>
                                                    <FontAwesome name="heart-o" size={20} color="white" />

                                                    <Text color="white" textAlign="center">
                                                        {item.like}
                                                    </Text>
                                                </XStack>
                                            </TouchableOpacity>
                                        </XStack>
                                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                                            <XStack>
                                                <FontAwesome5 name="comment-alt" size={20} color="white" />
                                            </XStack>
                                        </TouchableOpacity>
                                    </XStack>
                                </YStack>
                            </XStack>
                            {userId === item.userId && (
                                <>
                                    <XStack>
                                        <TouchableOpacity onPress={() => deleteChat(item.id)}>
                                            <FontAwesome name="trash" size={23} color="#f92e64"></FontAwesome>
                                        </TouchableOpacity>
                                    </XStack>
                                </>
                            )}
                        </XStack>
                    )}
                />
            </YStack>
        </ScreenTemplate>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#262626',
        borderRadius: 20,
        padding: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },

    textStyle: {
        color: '#60a5fa',
        fontWeight: 'bold',
        justifyContent: 'space-between',
    },
    textInput: {
        backgroundColor: 'transparent',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'white',
    },
})
