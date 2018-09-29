import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import config from '../config.json'

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
    <>
        <Slider {...settings}>
            {children}
        </Slider>
        <style jsx>{`
            .slick-slide div{
                outline: none
            }
            .slider__dots{
                list-style-type: none;
                padding: 0;
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
        `}</style>
    </>