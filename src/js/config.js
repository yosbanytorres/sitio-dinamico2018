import fibase from 'firebase/app'

const confg = {
  apiKey: "AIzaSyA-PEfy880E6VlYJNBuKmP_sdB4FaOp3kQ",
  authDomain: "edfirebase-6f24b.firebaseapp.com",
  databaseURL: "https://edfirebase-6f24b.firebaseio.com",
  projectId: "edfirebase-6f24b",
  storageBucket: "edfirebase-6f24b.appspot.com",
  messagingSenderId: "971660403208"
}

const init = () => fibase.initializeApp(confg)

init()
