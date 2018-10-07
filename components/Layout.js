import react from 'react'
import Router from 'next/router'
import config from '../config.json'
import Head from 'next/head'
import { auth } from '../services/firebase'


export default class extends react.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <main className="layout">
                <p onClick={()=>{auth().signOut().then(()=>console.log("Signed out: ", auth().currentUser))}}>Sign out</p>
                <p onClick={()=>{console.log("User: ", auth().currentUser)}}>Log current user</p>
                {this.props.children}
            </main>
        )
    }
}