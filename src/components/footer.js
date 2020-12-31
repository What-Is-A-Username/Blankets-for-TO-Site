import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'

const pages = [
  {to: "/", desc: "Home" },
  {to: "/about/", desc: "About"},
  {to: "/team/", desc: "Team"},
  {to: "/positions/", desc: "Positions"},
  {to: "/contact/", desc:"Contact Us"},
  {to: "/blog/", desc: "Updates"}, 
]

export default () => (
  <footer role="footer" className={styles.footer}>
    <h1 className={styles.footerTitle}>
      Blankets for Toronto
    </h1>
    <p className={styles.footerInfo}>
      An Organization at SomeLocation, 333 SomeAddress, SomeCity, SomeCountry
    </p>
    <ul className={styles.navigation}>
      {
        pages.map((page) => { return (
          <li className={styles.navigationItem}>
            <Link to={page.to}>{page.desc}</Link>
          </li>
          )})
      }
    </ul>
  </footer>
)
