import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { detailsBorder, details, summary } from './collapse-embed.module.css'

const CollapseEmbed = ({data}) => {

    const {heading, body} = data

    return(
        <div className={detailsBorder}>
            <details className={details}>
                <summary className={summary}>{heading}</summary>
                {documentToReactComponents(JSON.parse(body.raw), {})}
            </details>
        </div>
    )
}

export default CollapseEmbed