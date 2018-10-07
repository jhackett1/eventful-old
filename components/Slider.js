import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import config from '../config.json'
import {Fragment} from 'react'

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: 'slider__dots'
};

export default ({children}) =>
    <Fragment>
        <Slider {...settings}>
            {children}
        </Slider>
        <style>{`
            .slick-slide section{
                outline: none;
                height: calc(100vh - 175px);
                display: flex !important;
                flex-direction: column;
            }
            .slick-slide:first-of-type section{
                justify-content: center;
            }
            .slider__dots{
                list-style-type: none;
                padding: 0;
                margin: 20px
            }
            .slider__dots li{
                display: inline-block;
                margin-right: 9px
            }              
            .slider__dots li button{
                display: flex;
                border-radius: 100%;
                border: 3px solid ${config.colors.red};
                background: none;
                height: 25px;
                width: 25px;
                font-size: 0;
                // outline: none;
                transition: 0.1s ease-in
            }  
            .slider__dots li.slick-active button{
                background: ${config.colors.red}
            }       
            .slick-slide img{
                opacity: 0;
                transition: 0.5s ease-in;
            }  
            .slick-active img{
                opacity: 1 !important;
            }   
        `}</style>
    </Fragment>