import React, { useEffect, useState } from 'react'
import * as styles from './scroll-to-top.module.css'
import { ChevronUp } from 'react-feather';
import { max } from 'lodash';

const SCROLL_THRESHOLD = 150;

const ScrollToTop = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollToTop = () => {
        setIsScrolling(true);
        setScrollTop(0);
        window.scrollTo({top: 0, behavior: 'smooth'});
        setTimeout(() => setIsScrolling(false), 1000);
    }

    const showButton = scrollTop >= SCROLL_THRESHOLD;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                if (isScrolling) return;
                try {
                    setScrollTop(max([document.documentElement.scrollTop, document.body.scrollTop]));
                } catch (error) {
                    setScrollTop(SCROLL_THRESHOLD);
                }
            }
        }
    }, [])

    if (showButton && !isScrolling) {
        return (
            <button title='Scroll to top' className={styles.scrollToTopButton} onClick={scrollToTop}>
                <ChevronUp/>
            </button>
        )
    } else {
        return (null);
    }
}

export default ScrollToTop;