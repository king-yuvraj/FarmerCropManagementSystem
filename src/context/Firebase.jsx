import { createContext } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmaiAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, getDoc} from "firebase/firestore";
import { getDatabase, set, ref } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAN_l-vxYSFAD9-a8iJLECL1grvfYdy0Y0",
    authDomain: "fcms-app.firebaseapp.com",
    projectId: "fcms-app",
    storageBucket: "fcms-app.appspot.com",
    messagingSenderId: "190453504072",
    appId: "1:190453504072:web:39c0f01dd973de5bc4207d",
    measurementId: "G-99Y8Z55ETV",
    databaseURL: "https://fcms-app-default-rtdb.firebaseio.com/",
  };

  const firestore = getFirestore(FirebaseApp);

  const database = getDatabase(FirebaseApp);

  const putData = (key , data) => set(ref(database, key), data);

const writeData = async() => {
const result = await addDoc(collection(firestore, "user")); };


const getDocument = async() =>{
    const ref = doc(firestore, 'user','pHxszjrq1Ud3WnA5LUcU');
    const snap = await getDoc(ref);
}
const FirebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider() 

const signupWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
}
const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {

    const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmaiAndPassword(firebaseAuth, email, password);
    }
    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword}}>
        {props.children}
        </FirebaseContext.Provider>
    )
}

// import provider in index.js file and wrap aroound the app with this provider 

