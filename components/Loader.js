import config from '../config.json'
import {Fragment} from 'react'
import styled, { css, keyframes } from 'styled-components'

const loading = keyframes`
    100% {transform: rotate(360deg);}
`

const bounce = keyframes`
    0%, 100% {transform: scale(0.0);}
    50% {transform: scale(1.0);}
`

const Loader = styled.div`
    animation: ${loading} 2s linear infinite;
    position: relative;
    width: 45px;
    height: 45px;
    margin: 100px auto;
`

const Bubble = styled.div`
    position: absolute;
    top: 0;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: ${config.colors.red};
    animation: ${bounce} 2s ease-in-out infinite;
`

const Bubble2 = styled(Bubble)`
    top: auto;
    bottom: 0;
    animation-delay: -1s;
`

export default ()=>
    <Fragment>
        <Loader>
            <Bubble/>
            <Bubble2/>
        </Loader>
    </Fragment>