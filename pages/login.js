import react from 'react'
import Router from 'next/router'
import Loader from '../components/Loader'
import Slider from '../components/Slider'
import Button from '../components/Button'
import Help from '../components/Help'
import {provider, auth} from '../services/firebase'
import config from '../config.json'
import styled from 'styled-components'

const H1 = styled.h1`
    font-weight: 700;
    font-style: italic;
    font-size: 5em;
    line-height: 1em;
    margin: 5px 20px;
`

const H2 = styled.h2`
    font-weight: 100;
    font-style: italic;
    color: ${config.colors.grey2};
    font-size: 2em;
    margin: 15px 20px 0px 20px;
`

const H3 = styled.h3`
    margin: 20px 20px;
    font-size: 2em;
`

const P = styled.p`
    color: ${config.colors.grey2};
    margin: 0px 0px 0px 20px;
`

const ImgHolder = styled.div`
    flex: 1;
    height: 0px;
`

const Img = styled.img`
    height: auto;
    max-height: 100%;
    width: auto;
    max-width: 100%;
    float: right;
    filter: grayscale(1);
    clip-path: circle(49.6% at 70% 39%);
`

const LoginContainer = styled.div`
    margin: 20px;
`

const LoggingInMessage = styled.p`
    text-align: center;
    color: ${config.colors.grey2};
    font-size: 1.2em;
`

export default class Login extends react.Component{
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        auth().onAuthStateChanged((result)=>{
            if(result || auth().currentUser){
                Router.push('/')
            } else {
                this.setState({
                    loading: false
                })
            }
        })
    }

    login(){
        // Start login redirect
        auth().signInWithRedirect(provider)
    }

    render(){
        if(this.state.loading){
            return(
                <Loader/>
            )
        } else {
            return(
                <>
                    <Slider>
                        <section>
                            <P>14-15th April 2019</P>
                            <H1>{config.eventTitle}</H1>
                            <H2>{config.eventStrapline}</H2>
                        </section>
                        <section>
                            <ImgHolder>
                                <Img src="/static/onboarding1-small.jpg"/>
                            </ImgHolder>
                            <H3>{config.onboarding[0]}</H3>
                        </section>
                        <section>
                            <ImgHolder>
                                <Img src="/static/onboarding2-small.jpg"/>
                            </ImgHolder>
                            <H3>{config.onboarding[1]}</H3>
                        </section>
                    </Slider>
                    <LoginContainer>
                        <Button
                            onClick={this.login}
                            label="Log in with Google →"
                            solid
                            />  
                        <Help/>  
                    </LoginContainer>
                </>
            )
        }
    }
}