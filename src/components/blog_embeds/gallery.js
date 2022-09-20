import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './gallery.module.css'
import { ChevronLeft, ChevronRight, X } from 'react-feather'

class Gallery extends React.Component {

    state = { popup: false, selected: 0, length: this.props.data.images.length }

    onSelectThumb = (index) => {
        this.setState({selected: index, popup: true})
    }

    onClickNext = () => {
        this.setState({ selected: (this.state.selected + 1) % this.state.length })
    }

    onClickPrev = () => {
        var newState = this.state.selected - 1
        this.setState({ selected: newState < 0 ? this.state.length - 1 : newState })
    }

    onClosePopup = () => {
        this.setState({ popup: false })
    }

    render() {
        const { displayTitle, images } = this.props.data
        const displayDescription = this.props.data.displayDescription

        return(
            <div className={styles.galleryContainer}>
                {
                    displayTitle && 
                    <h1 className={styles.title}>{displayTitle}</h1>
                }
                {
                    displayDescription &&
                    <p className={styles.description}>{displayDescription.displayDescription}</p>
                }
                <div className={styles.thumbs}>
                    {
                        images.map((x, index) => {
                            return(
                                <div className={styles.thumb} onClick={() => this.onSelectThumb(index)}>
                                    <GatsbyImage image={x.gatsbyImageData}/>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.state.popup &&
                    <div className={styles.popup}>
                        {
                            (this.state.selected > 0) &&
                            <ChevronLeft  className={styles.leftArrow} onClick={this.onClickPrev}/>
                        }
                        {
                            (this.state.selected < this.state.length - 1) && 
                            <ChevronRight className={styles.rightArrow} onClick={this.onClickNext}/>
                        }
                        <div className={styles.popupContent}>
                            <div className={styles.popupBackground} onClick={() => this.onClosePopup()}/>
                            <div className={styles.popupimage}>
                                <GatsbyImage image={images[this.state.selected].gatsbyImageData} className={styles.popupimageDiv}/>
                            </div> 
                        </div>
                        <X className={styles.popupExit} onClick={() => this.onClosePopup()}/>
                    </div>
                }
            </div>
        )
    }
}

export default Gallery