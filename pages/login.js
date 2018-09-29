import react from 'react'
import Slider from '../components/Slider'
import Button from '../components/Button'
import Help from '../components/Help'

export default () => (
    <>
        <Slider/>
        <Button
            label="Log in with Google →"
            href="#"
            filled
            />     
        <Help/>       
    </>
)