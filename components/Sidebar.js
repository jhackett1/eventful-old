import react from 'react'
import Sidebar from "react-sidebar";
import Link from 'next/link'
import { auth } from '../services/firebase'

export default ({open}) =>
    <Sidebar
        sidebar={
            <button onClick={()=>{
            }}>Log out</button>
            <nav>
                <ul>
                    <li><Link href="/"><a>All events</a></Link></li>
                    <li><Link href="/agenda"><a>Agenda</a></Link></li>
                    <li><Link href="/info"><a>Info</a></Link></li>
                    <li><Link href="/speakers"><a>Speakers</a></Link></li>
                </ul>
            </nav>
        }
        open={open}
        style={{backgroundColor: "white"}}
        >

    </Sidebar>