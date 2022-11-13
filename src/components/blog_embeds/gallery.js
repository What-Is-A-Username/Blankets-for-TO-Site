import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image'
import { ChevronLeft, ChevronRight, X } from 'react-feather'
import {galleryContainer, title, description, thumbs, thumb, popup, popupContent, popupBackground, popupimage, leftArrow, rightArrow, popupExit } from './gallery.module.css'

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
            <div className={galleryContainer}>
                {
                    displayTitle && 
                    <h1 className={title}>{displayTitle}</h1>
                }
                {
                    displayDescription &&
                    <p className={description}>{displayDescription.displayDescription}</p>
                }
                <div className={thumbs}>
                    {
                        images.map((x, index) => {
                            return(
                                <div className={thumb} onClick={() => this.onSelectThumb(index)} key={`Gallery preview ${index}`}>
                                    <GatsbyImage image={x.gatsbyImageData} alt={x.description}/>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.state.popup &&
                    <div className={popup}>
                        
                        <div className={popupContent}>
                            <div className={popupBackground} onClick={() => this.onClosePopup()}/>
                            <div className={popupimage}>
                                <GatsbyImage image={images[this.state.selected].gatsbyImageData} alt={images[this.state.selected].description}/>
                            </div> 
                        </div>
                        {
                            (this.state.selected > 0) &&
                            <ChevronLeft  className={leftArrow} onClick={this.onClickPrev}/>
                        }
                        {
                            (this.state.selected < this.state.length - 1) && 
                            <ChevronRight className={rightArrow} onClick={this.onClickNext}/>
                        }
                        <X className={popupExit} onClick={() => this.onClosePopup()}/>
                    </div>
                }
            </div>
        )
    }
}

export default Gallery