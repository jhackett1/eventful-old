import react from 'react'
import config from '../config.json'
import Head from 'next/head'

export default ({children})=>
    <main className="layout">
        <Head>
          <meta name="viewport" content="width=device-width"/>
        </Head>
        {children}
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Ubuntu:300i,400,700');
            *{
                font-family: Ubuntu, sans-serif;
            }
            h1, h2, h3, h4, h5, li, p {
                color: ${config.colors.grey1}
            }
            a{
                color: ${config.colors.red};
                text-decoration: none;
            }
            a:hover{
                text-decoration: underline;
            }
        `}</style>

    </main>