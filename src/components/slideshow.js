import React, { useEffect, useState, setState } from 'react'
import styles from './slideshow.module.css'
import { Link } from 'gatsby'
import btnStyles from '../page-styles/index.module.css'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default class Slideshow extends React.Component {

    state = { slide: 0, cycle: true, starting: false }
    interruptDelay = 5000
    slideDelay = 3000
    slideTransition = 500 

    interrupt = (newSlide) => {
        if (newSlide < 0) newSlide = 0 
        else if (newSlide >= this.props.menuItems.length) newSlide = 0
        this.setState({ cycle: false, slide: newSlide });
        setTimeout(() => { 
            if (!this.state.cycle)
            {
                this.setState({
                    slide: this.state.slide,
                    cycle: false
                });
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
        setTimeout(() => {
            if (this.state.cycle)
                this.cycleAround()
        }, this.slideDelay);
    }

    cycleAround = () => { 
        if (!this.state.cycle) 
            return
        this.setState({
            starting : true,
        })
        setTimeout(() => {
            if (this.state.cycle)
                this.startCycle()
        }, this.slideTransition); 
    }

    componentDidMount()
    {
        this.cycleAround();
        // console.log(this.props.menuItems[0].node)
    }

    render() {
        return (
            
            <div className={styles.slideshow}>
                {/* <img className={styles.image} src={this.menuItems[this.state.slide]}/> */}
                <div className={this.state.starting ? styles.slideTextBoxFadeOut : styles.slideTextBox}>
                    <h2 className={styles.slideTitle}>{this.props.menuItems[this.state.slide].node.title}</h2>
                    <div>
                    {this.props.menuItems[this.state.slide].node.childContentfulHomeSlideDescriptionRichTextNode != null ? 
                        documentToReactComponents(this.props.menuItems[this.state.slide].node.childContentfulHomeSlideDescriptionRichTextNode.json) : <p>Error: Article not found.</p>}
                    </div>
                </div>
                { !this.state.starting && this.props.menuItems[this.state.slide].node.buttonLink != null ? 
                    <a className={this.state.starting ? styles.aButton : styles.aButton + " " + styles.buttonFadeIn} href={this.props.menuItems[this.state.slide].node.buttonLink}>
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
                {/* <a className={styles.prev} onClick={() => this.interrupt(this.state.slide - 1)}>&#10094;</a>
                <a className={styles.next} onClick={() => this.interrupt(this.state.slide + 1)}>&#10095;</a> */}
                
            </div>
        )
    }
}