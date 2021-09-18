import React from 'react'
import { StaticQuery, navigate, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './navigation.module.css'
import pageData from '../../pages/page-data.json'
import NavigationItem from './navigation-item'
import { Menu, X } from 'react-feather'

const Navigation = (props) => {
	return (
		<StaticQuery
			query={graphql`
                query NavLogoQuery 
                {
                    allContentfulOrganizationInformation 
                    {
                        nodes 
                        {
                            organizationLogo 
                            {
                                fluid(maxHeight: 400, resizingBehavior: SCALE, background: "rgb:FFFFFF")
                                {
                                    ...GatsbyContentfulFluid_tracedSVG
                                }
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
    var logo = propData.data.allContentfulOrganizationInformation.nodes[0].organizationLogo; 
    const [drawerActive, setDrawer] = React.useState(false);
    const { children } = propData.props
    const pages = pageData.pages
    
    const changeState = () => {
        setDrawer(!drawerActive);
    }
    const onClickLogo = () => {
        navigate('/')
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
                            <X className={styles.hamburger} color='red'/> :
                            <Menu className={styles.hamburger}/>}
                        </div>
                    </div>
                    
                    <div className={styles.navExpand}>
                        <ul className={styles.navigation + ' ' + (drawerActive ? styles.fadeIn : styles.fadeOut)}
                            style={drawerActive ? { } : { }}>
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


              