import auth from '@react-native-firebase/auth'
import React, { useState } from 'react'
import { View, TextInput, Button, Text, StyleSheet } from 'react-native'
import { XStack, YStack } from 'tamagui'

import { LoadingButton } from '@/components/core/LoadingButton'

const App = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSignUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password)
            setMessage('Usuário cadastrado com sucesso!')
        } catch (error) {
            setMessage(`Erro: ${error.message}`)
        }
    }

    const handleSignIn = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password)
            setMessage('Usuário autenticado com sucesso!')
        } catch (error) {
            setMessage(`Erro: ${error.message}`)
        }
    }

    return (
        <YStack>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <LoadingButton
                fontSize={16}
                mt={8}
                fontWeight="500"
                height={50}
                borderRadius={10}
                backgroundColor="$secondary"
                pressStyle={{ backgroundColor: '$colors.secondary50' }}
                color="white"
                onPress={handleSignUp}>
                Cadastrar
            </LoadingButton>
            <LoadingButton
                fontSize={16}
                mt={8}
                fontWeight="500"
                height={50}
                borderRadius={10}
                backgroundColor="$secondary"
                pressStyle={{ backgroundColor: '$colors.secondary50' }}
                color="white"
                onPress={handleSignIn}>
                Entrar
            </LoadingButton>
            {message ? <Text>{message}</Text> : null}
        </YStack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
})

export default App
