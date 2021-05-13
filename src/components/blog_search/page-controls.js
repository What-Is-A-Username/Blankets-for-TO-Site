import React from 'react'
import styles from '../../page-styles/blog.module.css'
import { filter, range } from 'lodash'

export default({numPages, onPageClick, currentPage}) => {
    return(
        <div>
            {numPages > 0 ?
            <ul className={styles.pageNumberParent}>
                <div className={styles.pageLabel}><a>Page</a></div>
                {
                    range(1, numPages+1).map((index) => {
                        return(
                            <div className={index == currentPage ? styles.selectedPageItem : styles.pageNumberItem} 
                                onClick={() => onPageClick(index)}
                                key={"Page" + index}>
                                <a>{index}</a>
                            </div>
                        )
                    })
                }
            </ul> 
            :
            null}
        </div>
    )
}