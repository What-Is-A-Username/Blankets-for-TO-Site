import React from 'react'
import { StaticQuery, navigate, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './navigation.module.css'
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
            render={data => NavBar({data: data, props: props})}
        />
    )
}

export default Navigation

const NavBar = (propData) => {
    var logo = propData.data.file.childImageSharp
    const [drawerActive, setDrawer] = React.useState(false);
    const { children } = propData.props
    const pages = pageData.pages
    
    const changeState = () => {
        setDrawer(!drawerActive);
    }
    const onClickLogo = () => {
        navigate('/')
    }

    // set default cookies
    var cart = []
    if (typeof window !== 'undefined')
    {
        cart = Cookies.get('cart-items')
        if (cart !== undefined) {
            cart = JSON.parse(cart)
            if (Array.isArray(cart))    
            var cleanedCart = cart.filter(x => x !== undefined && x.count > 0)
            Cookies.set('cart-items', JSON.stringify(cleanedCart), {path: '/'})
        } else {
            Cookies.set('cart-items', JSON.stringify([]), {path: '/'})
            // console.log("Set cart items back to zero.")
        }
    }
    

    return (
        <div className={drawerActive ? styles.scrollDisable : ''} style={{minHeight: '100vh'}}>
            {drawerActive && <div className={styles.blocker} onClick={changeState}></div>}
            <nav role="navigation">
                <div className={styles.header}>
                    <div className={styles.images}> 
                        <div className={styles.logo} onClick={onClickLogo} >
                            <GatsbyImage image={logo.gatsbyImageData} alt='Logo for Blankets for T.O.'/>
                        </div>
                        <div className={styles.toggle} onClick={changeState}>
                            {drawerActive ? 
                            null :
                            <Menu className={styles.hamburger}/>}
                        </div>
                    </div>
                    
                    <div className={styles.navExpand}>
                        <ul className={styles.navigation + ' ' + (drawerActive ? styles.fadeIn : styles.fadeOut)}
                            style={drawerActive ? { } : { }}>
                            {
                                drawerActive &&
                                <div className={styles.images + ' ' + styles.dropdownTop} style={{backgroundColor: '#00000000'}}> 
                                    <div className={styles.logo} onClick={onClickLogo} >
                                        <GatsbyImage image={logo.gatsbyImageData} alt='Logo for Blankets for T.O.'/>
                                    </div>
                                    <div className={styles.toggle} onClick={changeState}>
                                        {drawerActive ? 
                                        <X className={styles.hamburger} color='red'/> :
                                        <Menu className={styles.hamburger}/>}
                                    </div>
                                </div>
                            }
                            {
                                pages.map((page) => {
                                    return (
                                        <NavigationItem page={page} onChangeState={changeState} key={page.desc}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            {children ?? null}
        </div>
    )
}


              