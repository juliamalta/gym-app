import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// Configurações do Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBFItYxnXd5YjHDhfM1Y-c1GEEO7O1AGhA',
    authDomain: 'gymtraining-app.firebaseapp.com',
    projectId: 'gymtraining-app',
    storageBucket: 'gymtraining-app.appspot.com',
    messagingSenderId: '379726527745',
    appId: '1:379726527745:web:17d933199531702897af00',
    measurementId: 'G-NJR72R1P34',
}

// Inicializando o Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
