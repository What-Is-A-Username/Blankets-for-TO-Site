import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { alink, preview, previewImage, text, name, price, priceAmount, priceCurrency } from './store-item-preview.module.css'

const StoreItemPreview = ({storeitem}) => {
	return (
		<a href={`/store/${storeitem.slug}`} className={alink} key={storeitem.title}>
			<div className={preview}>
				<div className={previewImage}>
					{storeitem.mainPreview != null ?
						<GatsbyImage image={storeitem.mainPreview.gatsbyImageData} alt={storeitem.mainPreview.description} />
						:
						null}
				</div>
				<div className={text}>
					<h3 className={name}>{storeitem.itemName}</h3>
					<div className={price}>
						<p className={priceAmount}>${storeitem.itemPrice.toFixed(2)}</p>
						<p className={priceCurrency}>CAD</p>
					</div>
				</div>
			</div>
		</a>
    )
}

export default StoreItemPreview
