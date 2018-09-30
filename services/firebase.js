import firebase from 'firebase'
import config from '../config.json'

// Prevent re-initialising the app during next.js hot reloads
if (!firebase.apps.length) {
    firebase.initializeApp(config.firebase)
}

export default firebase
export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth
