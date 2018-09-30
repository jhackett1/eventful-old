import react from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import Button from '../components/Button'
import Help from '../components/Help'
import firebase, {auth, provider} from '../services/firebase'
import config from '../config.json'

export default () => 
    <Layout>
        <Slider>
            <div className="welcome">
                <p>14-15th April 2019</p>
                <h1>{config.eventTitle}</h1>
                <h2>{config.eventStrapline}</h2>
            </div>
            <div className="welcome">
                <img src="/static/onboarding1.jpg"/>
                <h3>{config.onboarding[0]}</h3>
            </div>
            <div className="welcome">
                <img src="/static/onboarding2.jpg"/>
                <h3>{config.onboarding[1]}</h3>
            </div>
        </Slider>
        <section className="log-in">
            <Button
                onClick={this.login}
                label="Log in with Google →"
                filled
                />     
            <Help/>  
        </section>
        <style jsx>{`
            .log-in{
                margin: 20px
            }
            .welcome p{
                color: ${config.colors.grey2};
                margin: 0px 0px 0px 20px;
            }
            .welcome h1{
                font-weight: 100;
                font-style: italic;
                font-size: 5em;
                line-height: 1em;
                margin: 5px 20px;
            }
            .welcome h2{
                font-weight: 100;
                font-style: italic;
                color: ${config.colors.grey2};
                font-size: 2em;
                margin: 15px 20px 0px 20px;
            }
            .welcome img{
                max-width: 100%;
                max-height: 500px;
                align-self: flex-end;
                filter: grayscale(1);
                clip-path: circle(49.6% at 70% 39%)
            }
            .welcome h3{
                margin: 20px 20px;
                font-size: 2em;
            }
        `}</style>  
    </Layout>