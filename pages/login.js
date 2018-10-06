import react from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import Loader from '../components/Loader'
import Button from '../components/Button'
import Help from '../components/Help'
import firebase, {provider, auth} from '../services/firebase'
import config from '../config.json'
import styled, { css } from 'styled-components'

const H1 = styled.h1`
    font-weight: 100;
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

const Img = styled.img`
    max-width: 100%;
    max-height: 500px;
    align-self: flex-end;
    filter: grayscale(1);
    clip-path: circle(49.6% at 70% 39%);
`

const LoginContainer = styled.div`
    margin: 20px;
`

export default class login extends react.Component{
    constructor(){
        super()
        this.state = {
            user: auth().currentUser
        }
    }

    login(){
        auth().signInWithRedirect(provider)
    }

    componentDidMount(){
        auth().getRedirectResult()
            .then(result => {
                console.log(result)
            }).catch(error => {
                console.log(error)
            })
        auth().onAuthStateChanged((user) => {
            this.setState({user: user})
        });
    }

    render(){
        return(

            <Layout>
                {(this.state.user)? "You are logged in": "You aren't logged in"}
                <Slider>
                    <div>
                        <P>14-15th April 2019</P>
                        <H1>{config.eventTitle}</H1>
                        <H2>{config.eventStrapline}</H2>
                    </div>
                    <div>
                        <Img src="/static/onboarding1.jpg"/>
                        <H3>{config.onboarding[0]}</H3>
                    </div>
                    <div>
                        <Img src="/static/onboarding2.jpg"/>
                        <H3>{config.onboarding[1]}</H3>
                    </div>
                </Slider>
                <LoginContainer>
                    <Button
                        onClick={this.login}
                        label="Log in with Google →"
                        solid
                        />     
                    <Help/>  
                </LoginContainer>
            </Layout>
        )
    }
}