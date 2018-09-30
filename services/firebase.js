import firebase from 'firebase'
import config from '../config.json'

const fbConfig = config.firebase

firebase.initializeApp(fbConfig)

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase
