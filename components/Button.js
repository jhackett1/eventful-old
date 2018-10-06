import react from 'react'
import Link from 'next/link'
import config from '../config.json'
import {Fragment} from 'react'
import styled, { css } from 'styled-components'

const A = styled.a`
    display: inline-block;
    min-width: 100px;                  
    line-height: 1.1em;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-decoration: none;
    transition: 0.1s ease-in;
    border: 2px solid ${config.colors.red};
    padding: 17px 25px;
    font-size: 0.8em;
    color: white;
    background-color: ${config.colors.red};
`

export default ({
    href, 
    label,
    onClick
})=>
    <Fragment>
        {(href)?
            <Link href={href} >
                <A onClick={onClick}>{label}</A>
            </Link>
        :
            <A onClick={onClick}>{label}</A>
        }
    </Fragment>