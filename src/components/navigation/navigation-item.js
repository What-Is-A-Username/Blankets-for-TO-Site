import React from 'react'
import { Link } from 'gatsby'
import { navigationItem, parentItem, dropdownContainer, childLink } from './navigation-item.module.css'
import { ChevronDown } from 'react-feather'

export default ({page, onChangeState}) => {
    return(
    <div className={navigationItem} key={page.desc} onClick={onChangeState}>
        <div className={parentItem}>
            <Link to={page.to}>{page.desc}{page.children !== undefined && <ChevronDown/>}</Link>
        </div>
        
        <div className={dropdownContainer}>
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