import React from 'react'
import { StaticQuery, navigate, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { scrollDisable, blocker, header, images, logoStyle, toggle, hamburger, navExpand, navigation, fadeIn, fadeOut, dropdownTop } from './navigation.module.css'
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
        <div className={drawerActive ? scrollDisable : ''} style={{minHeight: '100vh'}}>
            {drawerActive && <div className={blocker} onClick={changeState}></div>}
            <nav role="navigation">
                <div className={header}>
                    <div className={images}> 
                        <div className={logoStyle} onClick={onClickLogo} >
                            <GatsbyImage image={logo.gatsbyImageData} alt='Logo for Blankets for T.O.'/>
                        </div>
                        <div className={toggle} onClick={changeState}>
                            {drawerActive ? 
                            null :
                            <Menu className={hamburger}/>}
                        </div>
                    </div>
                    
                    <div className={navExpand}>
                        <ul className={navigation + ' ' + (drawerActive ? fadeIn : fadeOut)}
                            style={drawerActive ? { } : { }}>
                            {
                                drawerActive &&
                                <div className={images + ' ' + dropdownTop} style={{backgroundColor: '#00000000'}}> 
                                    <div className={logoStyle} onClick={onClickLogo} >
                                        <GatsbyImage image={logo.gatsbyImageData} alt='Logo for Blankets for T.O.'/>
                                    </div>
                                    <div className={toggle} onClick={changeState}>
                                        {drawerActive ? 
                                        <X className={hamburger} color='red'/> :
                                        <Menu className={hamburger}/>}
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


              