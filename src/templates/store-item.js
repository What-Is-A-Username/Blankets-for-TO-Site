import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer' 

import styles from '../templates/store-item.module.css'
import { XCircle, ShoppingBag, ChevronLeft, ChevronRight } from 'react-feather';

class StoreItemTemplate extends React.Component {

    item = get(this.props, 'data.contentfulMerchItem')
    state = { currentImage: 0, numImages: this.item.images ? this.item.images.length : 0}

    onNext = () => {
        let nextItem = (this.state.currentImage + 1) % this.state.numImages
        this.setState({currentImage: nextItem})
    }

    onPrev = () => {
        let prevItem = (this.state.currentImage - 1)
        if (prevItem < 0) prevItem = this.state.numImages - 1
        this.setState({currentImage: prevItem})
    }

    selectImage = (index) => {
        this.setState({currentImage: index})
    }

	render() {
        const options = {
			renderNode: {
				
			},
		};

        return(
            <Layout location={this.props.location}>
				<div className="white-background">
                    <SEO 
                        title={this.item.itemName}
                        description={`${this.item.itemName} (${this.item.itemPrice}) - SEO Description Here`}
                        cannonical='https://blanketsforto.ca/store'
                        metaImage={this.item.largePreview ? this.item.largePreview.file.url : undefined}
                        doNotCrawl
                    />
                    <div className="wrapper">
                        <div className={styles.layout}>
                            <div className={styles.preview}>
                                <div className={styles.carousel}>
                                    {
                                        this.state.numImages > 1 &&
                                        <ChevronLeft className={styles.leftArrow} onClick={() => this.onPrev()}/>
                                    }
                                    {
                                        this.state.numImages > 0 &&
                                        <div className={styles.image}>
                                            <Img fluid={this.item.images[this.state.currentImage].fluid}/>
                                        </div>
                                    }
                                    
                                    {
                                        this.state.numImages > 1 &&
                                        <ChevronRight className={styles.rightArrow} onClick={() => this.onNext()}/>
                                    }
                                </div>
                                <div className={styles.thumbnailRow}>
                                    {
                                        this.item.thumbs &&
                                        this.item.thumbs.map((thumb, index) => {
                                            return(
                                                <div onClick={() => this.selectImage(index)} className={index == this.state.currentImage ? styles.selectedThumb : styles.thumb} key={index}>
                                                    <Img fluid={thumb.fluid}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={styles.information}>
                                <h1 className={styles.name}>{this.item.itemName}</h1>
                                <div className={styles.price}>
                                    <p className={styles.priceAmount}>${this.item.itemPrice}</p>
                                    <p className={styles.priceCurrency}>CAD</p>
                                </div>
                                <div className={styles.description}>
                                    {this.item.itemDescription != null ? documentToReactComponents(this.item.itemDescription.json, options) : null}
                                </div>
                                {
                                    this.item.isInStock ?
                                    <div className={styles.inventory}>
                                        <ShoppingBag className={styles.icon_shoppingBag}/>
                                        <p className={styles.icon_shoppingBag}>Available in stock.</p>
                                    </div>:
                                    <div className={styles.inventory}>
                                        <XCircle className={styles.icon_redx}/>
                                        <p className={styles.icon_redx}>Item out of stock or no longer sold.</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <a href='/store' className={styles.browseOtherItems}>
                            <ChevronLeft/>
                            Browse other items
                        </a>
                    </div>  
                </div>
            </Layout>
        )
    }
}

export default StoreItemTemplate

export const StoreItemQuery = graphql`
    query QueryMerchItemByName($slug: String!) {
        contentfulMerchItem(slug: {eq: $slug}) {
            images {
                fluid(maxWidth: 500, maxHeight: 500) {
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
            thumbs : images {
                fluid(maxWidth: 50, maxHeight: 50, resizingBehavior: THUMB) {
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
            itemName
            itemPrice
            itemDescription {
                json
            }
            isInStock
            largePreview {
                file {
					url
				}
            }
        }
    }
`