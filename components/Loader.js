import config from '../config.json'
import {Fragment} from 'react'

export default ()=>
    <Fragment>
        <div class="loader">
            <div class="bubble-1"></div>
            <div class="bubble-2"></div>
        </div>
        <style jsx>{`
            @keyframes loading {
                100% {transform: rotate(360deg);}
            }

            @keyframes bounce  {
                0%, 100% {transform: scale(0.0);}
                50% {transform: scale(1.0);}
            }

            .loader {
                animation: loading 2s linear infinite;
                position: relative;
                width: 45px;
                height: 45px;
                margin: 20px auto;
            }

            .loader .bubble-1, 
            .loader .bubble-2 {
                position: absolute;
                top: 0;
                width: 25px;
                height: 25px;
                border-radius: 100%;
                background-color: ${config.colors.red};
                animation: bounce 2s ease-in-out infinite;
            }

            .loader .bubble-2 {
                top: auto;
                bottom: 0;
            }

            .loader .bubble-2 {
                animation-delay: -1s;
            }
        `}</style>
    </Fragment>