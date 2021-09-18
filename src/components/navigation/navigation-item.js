import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation-item.module.css'
import { ChevronDown } from 'react-feather'

export default ({page, onChangeState}) => {
    return(
    <div className={styles.navigationItem} key={page.desc} onClick={onChangeState}>
        <div className={styles.parentItem}>
            <Link to={page.to}>{page.desc}{page.children !== undefined && <ChevronDown/>}</Link>
        </div>
        
        <div className={styles.dropdownContainer}>
            { 
                page.children === undefined ? 
                null : 
                page.children.map((child) => {
                    return(
                        <div className={styles.childLink} key={child.desc}>
                            <Link to={child.to}>{child.desc}</Link>
                        </div>
                    )
                })
            } 
        </div>
    </div>
    )
}