import React from 'react'
import * as styles from './back-arrow.module.css'
import { ChevronLeft } from 'react-feather';

const BackArrow = ({text, link}) => 
{
    return(
        <a href={link} className={styles.arrowStyles}>
            <ChevronLeft/>
            {text}
        </a>
    )
}   

export default BackArrow