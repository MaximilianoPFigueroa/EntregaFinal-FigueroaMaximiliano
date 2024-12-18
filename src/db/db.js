import {
    initializeApp
} from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5684Gj7We_RVFgmWYWusQJjgraamU8uQ",
    authDomain: "ecommerce-figueroa.firebaseapp.com",
    projectId: "ecommerce-figueroa",
    storageBucket: "ecommerce-figueroa.firebasestorage.app",
    messagingSenderId: "749444659094",
    appId: "1:749444659094:web:d84525408debbef3634fb7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;