// Import the required Firebase SDK functions
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Firebase configuration object
const firebaseConfig = {
    apiKey: 'AIzaSyBFItYxnXd5YjHDhfM1Y-c1GEEO7O1AGhA',
    authDomain: 'gymtraining-app.firebaseapp.com',
    projectId: 'gymtraining-app',
    storageBucket: 'gymtraining-app.appspot.com',
    messagingSenderId: '379726527745',
    appId: '1:379726527745:web:17d933199531702897af00',
    measurementId: 'G-NJR72R1P34',
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig)

// Get Firestore and Storage services
const database = getFirestore(app)
const storage = getStorage(app)

export { database, storage }
