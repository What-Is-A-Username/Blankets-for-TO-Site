import React, { useEffect, useState, setState } from 'react'
import styles from './slideshow.module.css'
import Img from 'gatsby-image'
import slideStyles from './slideshow-slide.module.css'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { timers } from 'jquery'
import StyledButton from '../styled-button'

export default class Slideshow extends React.Component {
    state = { slide: 0, cycle: true, starting: false, timers: [] }

    interruptDelay = 5000
    slideDelay = 8000
    slideTransition = 500 

    interrupt = (newSlide) => {
        if (newSlide < 0 || newSlide >= this.props.menuItems.length) newSlide = 0 
        this.setState({ 
            cycle: false, 
            starting: false,
            slide: newSlide,
        });
    }

    startCycle = () => {
        if (!this.state.cycle || !this.state.starting) return; 
        this.setState({
            slide: (this.state.slide + 1) % this.props.menuItems.length, 
            starting: false
        })
        let startCycleTimer = setTimeout(() => {
            if (this.state.cycle)
                this.setState({
                    timers: timers.filter(x => x !== startCycleTimer)
            })
            this.cycleAround()
        }, this.slideDelay);
    }

    cycleAround = () => { 
        if (!this.state.cycle || this.state.starting) return
        let cycleAroundTimer = setTimeout(() => {
            if (this.state.cycle)
                this.startCycle()
            this.setState({
                timers: timers.filter(x => x !== cycleAroundTimer)
            })
        }, this.slideTransition); 
        this.setState({
            starting : true,
            timers : [...this.state.timers, cycleAroundTimer]
        })
    }

    componentDidMount()
    {
        this.state.timers.push(setTimeout(() => this.cycleAround(), this.slideDelay)); 
    }
    
    render() {
        return (
            <div className={styles.slideshow}>
                <div className={styles.imageCover + ' ' + (this.state.starting ? slideStyles.imageFadeOut : slideStyles.imageFadeIn)}>
                    <Img style={{position: 'absolute'}} fluid={this.props.menuItems[this.state.slide].node.backgroundImage.fluid} alt={'Image for ' + slideStyles.slideTitle}/>
                    <div className={styles.imageLayer}></div>
                </div>
                <div className={this.state.starting ? slideStyles.slideTextBoxFadeOut : slideStyles.slideTextBox}>
                    <h2 className={slideStyles.slideTitle}>{this.props.menuItems[this.state.slide].node.title}</h2>
                    <div className={slideStyles.slideDescription}>
                    {this.props.menuItems[this.state.slide].node.childContentfulHomeSlideDescriptionRichTextNode != null ? 
                        documentToReactComponents(this.props.menuItems[this.state.slide].node.childContentfulHomeSlideDescriptionRichTextNode.json) : <p>Error: Article not found.</p>}
                    </div>
                </div>
                { !this.state.starting && this.props.menuItems[this.state.slide].node.buttonLink != null ? 
                    <div className={this.state.starting ? slideStyles.aButton : (slideStyles.aButton + " " + slideStyles.buttonFadeIn)}>
                        <StyledButton link={this.props.menuItems[this.state.slide].node.buttonLink} buttonText={this.props.menuItems[this.state.slide].node.buttonText} openInNewTab/>
                    </div>
                    : null }  
                <div className={styles.dots}>
                    {
                        this.props.menuItems.map((item, index) => {
                            return (
                                <span className={index === this.state.slide ? styles.slideshowHighlightedDot : styles.slideshowDot}
                                    onClick={() => this.interrupt(index)} key={index}/>
                            )
                        })
                    }
                </div>                
            </div>
        )
    }

    componentWillUnmount()
    {
        this.state.timers.forEach( x => clearTimeout(clearTimeout(x)))
    }
}