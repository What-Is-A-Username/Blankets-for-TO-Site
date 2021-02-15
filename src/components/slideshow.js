import React, { useEffect, useState, setState } from 'react'
import styles from './slideshow.module.css'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import btnStyles from '../page-styles/index.module.css'
import slideStyles from './slideshow-slide.module.css'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default class Slideshow extends React.Component {

    state = { slide: 0, cycle: true, starting: false, timers: [] }
    interruptDelay = 5000
    slideDelay = 10000;
    slideTransition = 500 

    interrupt = (newSlide) => {
        if (newSlide < 0) newSlide = 0 
        else if (newSlide >= this.props.menuItems.length) newSlide = 0
        this.setState({ cycle: false, slide: newSlide });
        this.interruptTimer = setTimeout(() => { 
            if (!this.state.cycle)
            {
                this.setState({
                    slide: this.state.slide,
                    cycle: false
                });
                this.state.timers.pop(this.interruptTimer); 
                // if (this.state.cycle)
                //     this.cycleAround()
            }
        }, this.interruptDelay);
    }

    startCycle = () => {
        if (!this.state.cycle || !this.state.starting) 
            return
        // console.log(this.slide)
        this.setState({
            slide: (this.state.slide + 1) % this.props.menuItems.length, starting: false
        })
        this.startCycleTimer = setTimeout(() => {
            if (this.state.cycle)
                this.cycleAround()
            this.state.timers.pop(this.startCycleTimer); 
        }, this.slideDelay);
    }

    cycleAround = () => { 
        if (!this.state.cycle) 
            return
        this.setState({
            starting : true,
        })
        this.cycleAroundTimer = setTimeout(() => {
            if (this.state.cycle)
                this.startCycle()
            this.state.timers.pop(this.cycleAroundTimer); 
        }, this.slideTransition); 
        this.state.timers.push(this.cycleAroundTimer);
    }

    componentDidMount()
    {
        this.cycleAround();
    }

    render() {
        return (
            
            <div className={styles.slideshow}>
                <div className={styles.imageCover}>
                    <Img style={{position: 'absolute'}} fluid={this.props.menuItems[this.state.slide].node.backgroundImage.fluid}/>
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
                    <a className={this.state.starting ? slideStyles.aButton : slideStyles.aButton + " " + slideStyles.buttonFadeIn} href={this.props.menuItems[this.state.slide].node.buttonLink}>
                        <button className={btnStyles.btn} type="submit">{this.props.menuItems[this.state.slide].node.buttonText}</button> 
                    </a> : <div/> }  
                <div className={styles.dots}>
                    {
                        this.props.menuItems.map((item, index) => {
                            return (
                                index == this.state.slide ?
                                <span className={styles.slideshowHighlightedDot}
                                onClick={() => this.interrupt(index)} key={index}>
                                    </span>
                                    :
                                    <span className={styles.slideshowDot}
                                    onClick={() => this.interrupt(index)} key={index}>
                                    </span>)
                                }
                                )
                            }
                </div>                
            </div>
        )
    }

    componentWillUnmount()
    {
        this.state.timers.map( x => clearTimeout(clearTimeout(x)))
        this.setState = (state,callback)=>{
            return;
        };
    }
}