import firebase from 'firebase'
import config from '../config.json'

// Prevent re-initialising the app during next.js hot reloads
if (!firebase.apps.length) {
    firebase.initializeApp(config.firebase)
}

const authProvider = new firebase.auth.GoogleAuthProvider()

// Limit to G Suite accounts as specified in config
if(config.hostedDomain){
    authProvider.setCustomParameters({
        hd: config.hostedDomain
    })
}

export default firebase
export const provider = authProvider
export const auth = firebase.auth
