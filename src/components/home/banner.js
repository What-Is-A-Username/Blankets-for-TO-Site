import React from 'react';
import { ExternalLink } from 'react-feather';
import StyledButton from '../styled-button';
import { banner, textBox, buttonBox, title, description } from './banner.module.css'

const EventsBanner = () => {
    return(
        <div className={banner}>
            <div className={textBox}> 
                <h1 className={title}>Donate to our December Fundraiser!</h1>
                <p className={description}>Funds raised through our GoFundme will be used to purchase essential items, like clothing and blankets, for homeless shelters in need.</p>
            </div>
            <div className={buttonBox}>
                <StyledButton openInNewTab buttonText='Donate now' link='https://www.gofund.me/538ea9bf'><ExternalLink style={{marginLeft: '5px'}}/></StyledButton>
            </div>
        </div>
    )
}

export default EventsBanner;