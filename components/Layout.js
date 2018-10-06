import react from 'react'
import config from '../config.json'
import Head from 'next/head'

export default ({children})=>
    <main className="layout">
        {children}
    </main>