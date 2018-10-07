import config from '../config.json'
import {Fragment} from 'react'
import styled, { css, keyframes } from 'styled-components'

const loading = keyframes`
    100% {transform: rotate(360deg);}
`

const bounce = keyframes`
    0%, 100% {transform: scale(0.0);}
    33.3% {transform: scale(1.0);}
`

const Loader = styled.div`
    animation: ${loading} 2s linear infinite;
    position: relative;
    width: 55px;
    height: 55px;
    margin: 100px auto;
    // border: 1px solid green
`

const Bubble = styled.div`
    position: absolute;
    top: 0;
    left: 15px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: ${config.colors.red};
    animation: ${bounce} 4.5s ease-in-out infinite;
`

const Bubble2 = styled(Bubble)`
    top: auto;
    bottom: 0;
    left: 0px;
    animation-delay: -1.5s;
`

const Bubble3 = styled(Bubble)`
    top: auto;
    bottom: 0;
    right: 0px;
    left: auto;
    animation-delay: -3s;
`

export default ()=>
    <Fragment>
        <Loader>
            <Bubble/>
            <Bubble2/>
            <Bubble3/>
        </Loader>
    </Fragment>