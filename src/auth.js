import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseAuthPlugin = app => {

    return {
        auth: getAuth( app ),
        createUser: (auth, email, password) => createUserWithEmailAndPassword(auth, email, password),
        loginUser: (auth, email, password) => signInWithEmailAndPassword(auth, email, password)
    }
}

export default firebaseAuthPlugin



