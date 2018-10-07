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
            .slick-slide div{
                outline: none;
                height: calc(100vh - 175px);
                display: flex !important;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
            }
            .slick-slide:first-of-type div{
                justify-content: center;
            }
            .slider__dots{
                list-style-type: none;
                padding: 0;
                margin: 20px
            }
            .slider__dots li{
                display: inline-block;
                margin-right: 7px
            }              
            .slider__dots li button{
                display: flex;
                border-radius: 100%;
                border: 2px solid ${config.colors.red};
                background: none;
                height: 20px;
                width: 20px;
                font-size: 0;
                outline: none;
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
            .slick-slide h1{
                opacity: 0;
                transform: translateY(10px);
                transition: 0.5s ease-in;
            } 
            .slick-active h1{
                opacity: 1 !important;
                transform: translateY(0px);
            }
        `}</style>
    </Fragment>