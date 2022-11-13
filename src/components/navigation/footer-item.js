import React from 'react'
import { Link } from 'gatsby'
import { footerItem, dropdownContainer, parentLink, childLink } from './footer-item.module.css'

export default ({page}) => {
    return(
        <div className={footerItem} key={page.desc}>
            <div className={dropdownContainer}>
                <Link to={page.to} className={parentLink}>{page.desc}</Link>
                { 
                    page.children === undefined ? 
                    null : 
                    page.children.map((child) => {
                        return(
                            <div className={childLink} key={child.desc}>
                                <Link to={child.to}>{child.desc}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}