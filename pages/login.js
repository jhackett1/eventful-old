import react from 'react'
import Slider from "react-slick";

import Button from '../components/Button'
import Help from '../components/Help'

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

export default () => (
    <>
        <Slider {...settings}>
          <div>
            <p>14-15th April 2019</p>
            <h1>Utopia</h1>
            <h2>The fast stream conference</h2>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
        <Button
            label="Log in with Google →"
            href="#"
            filled
            />     
        <Help/>       
    </>
)