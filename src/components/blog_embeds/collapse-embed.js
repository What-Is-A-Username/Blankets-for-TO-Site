import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as styles from './collapse-embed.module.css'

const CollapseEmbed = ({data}) => {

    const {heading, body} = data

    return(
        <div className={styles.detailsBorder}>
            <details className={styles.details}>
                <summary className={styles.summary}>{heading}</summary>
                {documentToReactComponents(JSON.parse(body.raw), {})}
            </details>
        </div>
    )
}

export default CollapseEmbed