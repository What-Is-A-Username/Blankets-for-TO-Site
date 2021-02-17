import React from 'react'
import { Link, navigate } from 'gatsby'
import styles from './navigation.module.css'


const pages = [
    { to: "/", desc: "Home" },
    { to: "/about", desc: "About" },
    { to: "/team", desc: "Team" },
    { to: "/positions", desc: "Membership/Volunteering" },
    { to: "/contact", desc: "Contact" },
    { to: "/blog", desc: "Updates" },
  ]

export default (props) => {

    const [drawerActive, setDrawer] = React.useState(false);
    const { location, children } = props

    const changeState = () => {
        setDrawer(!drawerActive);
    }

    return (
        <div className={drawerActive ? styles.scrollDisable : ' '}>
            <nav role="navigation">
                <div className={styles.logo}>
                    <h1>Blankets For T.O.</h1>
                    <div className={styles.toggle} onClick={changeState}>
                        {drawerActive ? 
                        <div className={styles.hamburger + ' ' + styles.menuOpen}></div> :
                        <div className={styles.hamburger + ' ' + styles.menuClosed}></div>}
                    </div>
                </div>

                <ul className={styles.navigation + ' ' + (drawerActive ? styles.fadeIn : styles.fadeOut)}
                    style={drawerActive ? { top: "70px" } : { top: "-150%" }}
                >
                    {
                        pages.map((page) => {
                            return (
                                <li className={styles.navigationItem} key={page.desc} onClick={changeState}>
                                    <Link to={page.to}>{page.desc}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            {children}
        </div>)
}
