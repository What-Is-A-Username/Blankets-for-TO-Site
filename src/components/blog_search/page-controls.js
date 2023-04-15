import React from 'react'
import {pageNumberParent, pageLabel, selectedPageItem, pageNumberItem }  from './page-controls.module.css'
import { range } from 'lodash'

export default({numPages, onPageClick, currentPage}) => {
    return(
        <div>
            {numPages > 0 ?
            <ul className={pageNumberParent}>
                <div className={pageLabel}><span>Page</span></div>
                {
                    range(1, numPages+1).map((index) => {
                        return(
                            <div className={index == currentPage ? selectedPageItem : pageNumberItem} 
                                onClick={() => onPageClick(index)}
                                key={"Page" + index}>
                                <span>{index}</span>
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