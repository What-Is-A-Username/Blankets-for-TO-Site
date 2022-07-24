import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import { min, round } from 'lodash';

const AnimationClass = ({children, 
    // animations 
    fade = false, 
    bounce = false, 
    zoom = false,

    // timing (in ms)
    animationDelay = 100,
    animationDuration = 500,

    // callback
    onReveal = undefined,

    // directionality
    left = false,
    right = false,
    down = false,
    up = false,

    doNotJustifyContentCenter = false,
    doNotAlignItemsCenter = false,

    style = {},
    className = '',

    // animate in (appearance) and out (disappearance)?
    animIn = true
}) => {

    const [isDelayOver, setIsDelayOver] = useState(false);
    animationDelay = min([100, animationDelay])

    const onViewChange = (inView, entry) => {
        if (inView) {
            setTimeout(() => {
                if (onReveal !== undefined) onReveal();
                setIsDelayOver(true)
            }, animationDelay);
        }
    }

    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        rootMargin: '-15% 0px',
        trackVisibility: true,
        threshold: 0,
        delay: 100,
        onChange: onViewChange,
      });

    // has a direction (left, right, up, down) been specified for the animation?
    const noDir = !left && !right && !down && !up;

    // render the current animation?
    const animationVisible = entry ? inView && isDelayOver : true;

    const getClasses = () => {
        if (!animationVisible) {
            return('');
        } 

        var c = ['animate__animated', 
            ...(className !== '') ? [className] : [],
            ...(fade && noDir && animIn) ? ['animate__fadeIn'] : [],
            ...(fade && left && animIn) ? ['animate__fadeInLeft'] : [],
            ...(fade && right && animIn) ? ['animate__fadeInRight'] : [],
            ...(fade && down && animIn) ? ['animate__fadeInDown'] : [],
            ...(fade && up && animIn) ? ['animate__fadeInUp'] : [],
            ...(bounce && noDir && animIn) ? ['animate__bounceIn'] : [],
            ...(bounce && left && animIn) ? ['animate__bounceInLeft'] : [],
            ...(bounce && right && animIn) ? ['animate__bounceInRight'] : [],
            ...(bounce && down && animIn) ? ['animate__bounceInDown'] : [],
            ...(bounce && up && animIn) ? ['animate__bounceInUp'] : [],
            ...(zoom && noDir && animIn) ? ['animate__zoomIn'] : [],
            ...(zoom && left && animIn) ? ['animate__zoomInLeft'] : [],
            ...(zoom && right && animIn) ? ['animate__zoomInRight'] : [],
            ...(zoom && down && animIn) ? ['animate__zoomInDown'] : [],
            ...(zoom && up && animIn) ? ['animate__zoomInUp'] : [],
        ]; 
        
        return c.join(' ');
    }

    const getStyles = () => { 
        var final_style = {}
        if (!animationVisible) {
            final_style = {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                minHeight: '1px',
                minWidth: '1px',
                justifyContent: doNotJustifyContentCenter ? 'center' : 'unset',
                opacity: 0,
                ...style
            }
        } else {
            final_style = {
                display: 'flex',
                flexDirection: 'column',
                minHeight: '1px',
                minWidth: '1px',
                width: '100%',
                height: '100%',
                justifyContent: doNotJustifyContentCenter ? 'unset' : 'center',
                // alignItems: doNotAlignItemsCenter ? 'unset' : 'center',
                '--animate-duration': (round(animationDuration / 1000, 3)).toString().concat('s'),
                ...style
            }
        }
        return(final_style)
    }
    
    return(
        <div ref={ref} className={getClasses()} style={getStyles()}>
            {children}
        </div>
    )
}

export default AnimationClass