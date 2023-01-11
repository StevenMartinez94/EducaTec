// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, onValue } from "firebase/database"
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBej0AzmiLbCTNW4Q9p96IR7whyWCCb9o",
  authDomain: "educatec-f675c.firebaseapp.com",
  databaseURL: "https://educatec-f675c-default-rtdb.firebaseio.com",
  projectId: "educatec-f675c",
  storageBucket: "educatec-f675c.appspot.com",
  messagingSenderId: "998023685281",
  appId: "1:998023685281:web:faede9c977778f60047ce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

const auth = getAuth(app)

export { auth, app }

export function writeObjectData(payload, collectionPath) {
  set(ref(database, collectionPath), payload)
}

export function getObjectData(collectionPath) {
  const collectionReference = ref(database, collectionPath)
  var data = null;
  onValue(collectionReference, (snapshot) => {
    data = snapshot.val()
  })
  return data;
}
