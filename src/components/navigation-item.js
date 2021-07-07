import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation-item.module.css'

export default ({page, onChangeState}) => {
    return(
    <div className={styles.navigationItem} key={page.desc} onClick={onChangeState}>
        <div className={styles.parentItem}>
            <Link to={page.to}>{page.desc}</Link>
        </div>
        <div className={styles.dropdownContainer}>
            { 
                page.children === undefined ? 
                null : 
                page.children.map((child) => {
                    return(
                        <div className={styles.childLink}>
                            <Link to={child.to}>{child.desc}</Link>
                        </div>
                    )
                })
            } 
        </div>
    </div>
    )
}