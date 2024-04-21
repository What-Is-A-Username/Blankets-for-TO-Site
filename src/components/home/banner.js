import React from 'react';
import { ExternalLink } from 'react-feather';
import StyledButton from '../styled-button';
import { banner, textBox, buttonBox, title, description } from './banner.module.css'

const EventsBanner = ({titleText, descriptionText, children, link }) => {
    return(
        <div className={banner}>
            <div className={textBox}> 
                <span className={title}>{titleText}</span>
                <p className={description}>{descriptionText}</p>
                {children}
            </div>
            <div className={buttonBox}>
                <StyledButton openInNewTab buttonText='Donate now' link={link}><ExternalLink style={{marginLeft: '5px'}}/></StyledButton>
            </div>
        </div>
    )
}

export default EventsBanner;