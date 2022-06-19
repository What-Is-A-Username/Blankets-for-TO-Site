import React from 'react' 
import Img from 'gatsby-image'
import styles from './gallery.module.css'
import { ChevronLeft, ChevronRight, X } from 'react-feather'

class Gallery extends React.Component {

    state = { popup: false, selected: 0, length: this.props.node.thumbs.length }

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
        this.setState({popup: false})
    }

    render() {
        const data = this.props.node
        const displayTitle = data.displayTitle
        const displayDescription = data.displayDescription.displayDescription
        const thumbs = data.thumbs
        const images = data.images

        return(
            <div className={styles.galleryContainer}>
                {
                    typeof displayDescription !== 'undefined' && displayDescription !== '' && 
                    <h1 className={styles.title}>{displayTitle}</h1>
                }
                {
                    typeof displayDescription !== 'undefined' && displayDescription !== '' &&
                    <p className={styles.description}>{displayDescription}</p>
                }
                <div className={styles.thumbs}>
                    {
                        thumbs.map((x, index) => {
                            return(
                                <div className={styles.thumb} onClick={() => this.onSelectThumb(index)}>
                                    <Img fluid={x.fluid}/>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.state.popup &&
                    <div className={styles.popup}>
                        <div className={styles.popupBackground} onClick={() => this.onClosePopup()}>
                        </div>
                        <X className={styles.popupExit} onClick={() => this.onClosePopup()}/>
                        <div className={styles.popupContent}>
                            <div className={styles.popupimage}>
                                <Img fluid={images[this.state.selected].fluid}/>
                            </div> 
                            {
                                (this.state.selected > 0) &&
                                <ChevronLeft  className={styles.leftArrow} onClick={this.onClickPrev}/>
                            }
                            {
                                (this.state.selected < this.state.length - 1) && 
                                <ChevronRight className={styles.rightArrow} onClick={this.onClickNext}/>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Gallery