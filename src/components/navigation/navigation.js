import React from 'react'
import { StaticQuery, navigate, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './navigation.module.css'
import pageData from '../../pages/page-data.json'
import NavigationItem from './navigation-item'
import { Menu, X } from 'react-feather'
import Cookies from 'universal-cookie'

const Navigation = (props) => {
	return (
		<StaticQuery
			query={graphql`
                query NavLogoQuery 
                {
                    file(relativePath: { eq: "bto_new_logo_transparent.png" }) {
                        childImageSharp {
                            fluid(maxHeight: 100, quality: 100) {
                                ...GatsbyImageSharpFluid
                                ...GatsbyImageSharpFluidLimitPresentationSize
                            }
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
    var isServer = typeof window === undefined;
    if (!isServer)
    {
        var cookies = new Cookies(); 
        cart = cookies.get('cart-items')
        if (cart === undefined)
            cookies.set('cart-items', [], {path: '/'})
        else
            cookies.set('cart-items', cart.filter(x => x !== undefined && x.count > 0), {path: '/'})
    }
    

    return (
        <div className={drawerActive ? styles.scrollDisable : ''} style={{minHeight: '100vh'}}>
            {drawerActive && <div className={styles.blocker} onClick={changeState}></div>}
            <nav role="navigation">
                <div className={styles.header}>
                    <div className={styles.images}> 
                        <div className={styles.logo} onClick={onClickLogo} >
                            <Img fluid={logo.fluid}/>
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
                                        <Img fluid={logo.fluid}/>
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


              