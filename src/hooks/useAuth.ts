import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { useEffect, useState } from 'react'

export function useAuth() {
    const [user, setUser] = useState<User | null | undefined>(undefined) // 'undefined' indica estado indefinido
    const auth = getAuth()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            console.log('🔥 Estado do usuário atualizado:', firebaseUser)

            // Evita re-render desnecessário
            setUser((prevUser) => {
                if (prevUser?.uid !== firebaseUser?.uid) {
                    return firebaseUser
                }
                return prevUser
            })
        })

        return () => unsubscribe()
    }, [])

    return { isAuthenticated: !!user, user }
}
