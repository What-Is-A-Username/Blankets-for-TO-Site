import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './store-item-preview.module.css'

const StoreItemPreview = ({storeitem}) => {
	return (
		<a href={`/store/${storeitem.slug}`} className={styles.alink} key={storeitem.title}>
			<div className={styles.preview}>
				<div className={styles.previewImage}>
					{storeitem.mainPreview != null ?
						<GatsbyImage image={storeitem.mainPreview.gatsbyImageData} alt={storeitem.mainPreview.description} />
						:
						null}
				</div>
				<div className={styles.text}>
					<h3 className={styles.name}>{storeitem.itemName}</h3>
					<div className={styles.price}>
						<p className={styles.priceAmount}>${storeitem.itemPrice.toFixed(2)}</p>
						<p className={styles.priceCurrency}>CAD</p>
					</div>
				</div>
			</div>
		</a>
    )
}

export default StoreItemPreview
