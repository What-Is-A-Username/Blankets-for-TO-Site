import React, { useEffect } from 'react'
import { StaticQuery, navigate, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { scrollDisable, blocker, header, images, logoStyle, toggle, hamburger, navExpand, navigation, fadeIn, fadeOut, dropdownTop, sticky, nonsticky } from './navigation.module.css'
import pageData from '../../pages/page-data.json'
import NavigationItem from './navigation-item'
import { Menu, X } from 'react-feather'
import Cookies from 'js-cookie'

const Navigation = (props) => {
    return (
        <StaticQuery
            query={graphql`
                query NavLogoQuery 
                {
                    file(relativePath: { eq: "bto_new_logo_transparent.png" }) {
                        childImageSharp {
                            gatsbyImageData(
                                layout: FULL_WIDTH
                                placeholder: BLURRED
                            )
                        }
                    }
                }`
            }
            render={data => NavBar({ data: data, props: props })}
        />
    )
}

export default Navigation

const NavBar = (propData) => {
    var logo = propData.data.file.childImageSharp
    const [mobileNavActive, setDrawer] = React.useState(false);
    const headerPositioningRef = React.useRef(null);
    const { children } = propData.props
    const pages = pageData.pages

    const changeState = () => {
        setDrawer(!mobileNavActive);
    }
    const onClickLogo = () => {
        navigate('/')
    }

    // set default cookies
    var cart = []
    if (typeof window !== 'undefined') {
        cart = Cookies.get('cart-items')
        if (cart !== undefined) {
            cart = JSON.parse(cart)
            if (Array.isArray(cart))
                var cleanedCart = cart.filter(x => x !== undefined && x.count > 0)
            Cookies.set('cart-items', JSON.stringify(cleanedCart), { path: '/' })
        } else {
            Cookies.set('cart-items', JSON.stringify([]), { path: '/' })
            // console.log("Set cart items back to zero.")
        }
    }

    const updateNavbarOnScroll = () => {
        if (window) {
            if (window.scrollY > 200) {
                // Make nav sticky when page is scrolled down
                if (headerPositioningRef) {
                    headerPositioningRef.current.classList.add(sticky);
                    headerPositioningRef.current.classList.remove(nonsticky)
                }
            } else {
                if (headerPositioningRef) {
                    headerPositioningRef.current.classList.remove(sticky);
                    headerPositioningRef.current.classList.add(nonsticky);
                }
            }
        }
    }

    useEffect(() => {
        if (window) {
            if (headerPositioningRef.current) {
                updateNavbarOnScroll();
            }
            window.addEventListener('scroll', updateNavbarOnScroll);
            // cleanup function
            return () => {
                window.removeEventListener('scroll', updateNavbarOnScroll);
            };
        }
    }, [])


    return (
        <div className={mobileNavActive ? scrollDisable : ''} style={{ minHeight: '100vh' }}>
            {mobileNavActive && <div className={blocker} onClick={changeState}></div>}
            <nav role="navigation">
                <div ref={headerPositioningRef}>
                    <div className={header}>
                        <div className={images}>
                            <div className={logoStyle} onClick={onClickLogo} >
                                <GatsbyImage image={logo.gatsbyImageData} alt='Logo for Blankets for T.O.' />
                            </div>
                            <div className={toggle} onClick={changeState}>
                                {mobileNavActive ?
                                    null :
                                    <Menu className={hamburger} />}
                            </div>
                        </div>

                        <div className={navExpand}>
                            <ul className={navigation + ' ' + (mobileNavActive ? fadeIn : fadeOut)}>
                                {
                                    mobileNavActive &&
                                    <div className={images + ' ' + dropdownTop} style={{ backgroundColor: '#00000000' }}>
                                        <div className={logoStyle} onClick={onClickLogo} >
                                            <GatsbyImage image={logo.gatsbyImageData} alt='Logo for Blankets for T.O.' />
                                        </div>
                                        <div className={toggle} onClick={changeState}>
                                            {mobileNavActive ?
                                                <X className={hamburger} color='red' /> :
                                                <Menu className={hamburger} />}
                                        </div>
                                    </div>
                                }
                                {
                                    pages.map((page) => {
                                        return (
                                            <NavigationItem page={page} onChangeState={changeState} key={page.desc} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {children ?? null}
        </div>
    )
}


