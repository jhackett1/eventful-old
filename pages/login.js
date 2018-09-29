import react from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import Button from '../components/Button'
import Help from '../components/Help'
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
        <Button
            label="Log in with Google →"
            href="#"
            filled
            />     
        <Help/>  
        <style jsx>{`
            .welcome p{
                color: ${config.colors.grey2};
                margin: 0px;
            }
            .welcome h1{
                font-weight: 100;
                font-style: italic;
                font-size: 5em;
                line-height: 1em;
                margin: 5px 0px;
            }
            .welcome h2{
                font-weight: 100;
                font-style: italic;
                color: ${config.colors.grey2};
                font-size: 2em;
                margin: 15px 0px;
            }
            .welcome img{
                max-width: 100%;
                filter: grayscale(1);
                clip-path: circle(37.6% at 80% 37%);
            }
        `}</style>  
    </Layout>