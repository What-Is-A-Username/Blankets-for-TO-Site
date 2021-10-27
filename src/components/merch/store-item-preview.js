import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import styles from './store-item-preview.module.css'

const StoreItemPreview = ({storeitem}) => {
	return (
		<a href={`/store/${storeitem.slug}`} className={styles.alink} key={storeitem.title}>
			<div className={styles.preview}>
				<div className={styles.previewImage}>
					{storeitem.mainPreview != null ?
						<Img fluid={storeitem.mainPreview.fluid} alt={storeitem.mainPreview.description} />
						:
						null}
				</div>
				<div className={styles.text}>
					<h3 className={styles.name}>{storeitem.itemName}</h3>
					<div className={styles.price}>
						<p className={styles.priceAmount}>${storeitem.itemPrice}</p>
						<p className={styles.priceCurrency}>CAD</p>
					</div>
				</div>
			</div>
		</a>
    )
}

export default StoreItemPreview
