import react from 'react'
import Link from 'next/link'
import config from '../config.json'
import {Fragment} from 'react'

export default ({
    href, 
    label, 
    solid, 
    small,
    onClick
})=>
    <Fragment>
        {(href)?
            <Link href={href} >
                <a className="button" onClick={onClick}>{label}</a>
            </Link>
        :
            <a className="button" onClick={onClick}>{label}</a>
        }
        <style jsx>{`
            .button {
                display: inline-block;
                min-width: 100px;                  
                line-height: 1.1em;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 3px;
                text-decoration: none;
                transition: 0.1s ease-in;
                border: 2px solid ${config.colors.red};
                padding: ${(small)? "9px 20px" : "17px 25px"};
                font-size: ${(small)? "0.75em" : "0.8em"};      
                background-color: ${(solid)? "white" : config.colors.red};
                color: ${(solid)? config.colors.red : "white"}
            }
            .button:hover{
                filter: brightness(1.1);
                text-decoration: none;
            }
        `}</style>
    </Fragment>