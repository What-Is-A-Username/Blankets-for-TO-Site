import React from 'react'
import { Link, navigate } from 'gatsby'
import styles from './navigation.module.css'
import pageData from '../../pages/page-data.json'
import NavigationItem from './navigation-item'

export default (props) => {

    const [drawerActive, setDrawer] = React.useState(false);
    const { location, children } = props
    const pages = pageData.pages

    const changeState = () => {
        console.log('Clicked')
        setDrawer(!drawerActive);
    }

    return (
        <div className={drawerActive ? styles.scrollDisable : ' '}>
            {drawerActive && <div className={styles.blocker} onClick={changeState}></div>}
            <nav role="navigation">
                <div style={{zIndex: '300'}}>
                    <div className={styles.logo}>
                        <h1>Blankets For T.O.</h1>
                        <div className={styles.toggle} onClick={changeState}>
                            {drawerActive ? 
                            <div className={styles.hamburger + ' ' + styles.menuOpen}></div> :
                            <div className={styles.hamburger + ' ' + styles.menuClosed}></div>}
                        </div>
                    </div>
                    <ul className={styles.navigation + ' ' + (drawerActive ? styles.fadeIn : styles.fadeOut)}
                        style={drawerActive ? { top: "70px" } : { top: "-150%" }}>
                        {
                            pages.map((page) => {
                                return (
                                    <NavigationItem page={page} onChangeState={changeState}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
            {children}
        </div>
    )
}
