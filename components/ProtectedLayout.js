import react from 'react'
import { auth } from '../services/firebase'
import Router from 'next/router'
import Link from 'next/link'
import Header from './Header'
import styled from 'styled-components'
import Login from '../pages/login'

const Main = styled.main`
    padding: 15px;
`

export default class extends react.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // Send all unauthenticated users right back to the login screen
        auth().onAuthStateChanged((user)=>{
            if(!user){
                Router.push("/login")
            }
        })
    }

    logout(){
        auth().signOut()
    }

    render(){
        if(auth().currentUser){
            return(
                <Main>
                    <button onClick={this.logout}>Log out</button>
                    <ul>
                        <li><Link href="/"><a>All events</a></Link></li>
                        <li><Link href="/agenda"><a>Agenda</a></Link></li>   
                        <li><Link href="/info"><a>Info</a></Link></li>
                        <li><Link href="/speakers"><a>Speakers</a></Link></li>                     
                    </ul>
                    {this.props.children}
                    <p>You should only see this when logged in.</p>
                </Main>
            )
        } else {
            return <Login/>
        }
    }
}
