import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyBFItYxnXd5YjHDhfM1Y-c1GEEO7O1AGhA',
    authDomain: 'gymtraining-app.firebaseapp.com',
    projectId: 'gymtraining-app',
    storageBucket: 'gymtraining-app.appspot.com',
    messagingSenderId: '379726527745',
    appId: '1:379726527745:web:17d933199531702897af00',
    measurementId: 'G-NJR72R1P34',
}

// Inicializa o Firebase
const app = initializeApp(firebaseConfig)

// Inicializa os serviços do Firebase
const database = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

// Exporta todas as instâncias necessárias
export { app, database, storage, auth }
