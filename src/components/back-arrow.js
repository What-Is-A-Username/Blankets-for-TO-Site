import React from 'react'
import { arrowStyles } from './back-arrow.module.css'
import { ChevronLeft } from 'react-feather';

const BackArrow = ({text, link}) => 
{
    return(
        <a href={link} className={arrowStyles}>
            <ChevronLeft/>
            {text}
        </a>
    )
}   

export default BackArrow