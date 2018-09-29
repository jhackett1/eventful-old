import Slider from "react-slick";
import "slick-carousel/slick/slick.css"

import './slider.sass'

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: 'slider__dots'
  };

export default () =>
    <Slider {...settings}>
        <div>
        <p>14-15th April 2019</p>
        <h1>Utopia</h1>
        <h2>The fast stream conference</h2>
        </div>
        <div>
            {/* <img src="/static/onboarding1.jpg"/> */}
            <h3>Explore events and speakers</h3>
        </div>
        <div>
            {/* <img src="/static/onboarding2.jpg"/> */}
            <h3>And save the ones you’re interested in</h3>
        </div>
    </Slider>