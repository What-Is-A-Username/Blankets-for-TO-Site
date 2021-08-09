import React from 'react'
import { Link } from 'gatsby'
import styles from './footer-item.module.css'

export default ({page}) => {
    return(
        <div className={styles.footerItem} key={page.desc}>
            <div className={styles.dropdownContainer}>
                <Link to={page.to} className={styles.parentLink}>{page.desc}</Link>
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