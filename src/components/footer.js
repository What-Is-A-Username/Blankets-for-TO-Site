import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'

const pages = [
  { to: "/", desc: "Home" },
  { to: "/about", desc: "About" },
  { to: "/team", desc: "Team" },
  { to: "/positions", desc: "Volunteers and Positions" },
  { to: "/contact", desc: "Contact" },
  { to: "/blog", desc: "Updates" },
]


export default () => (
  <footer role="footer" className={styles.footer}>
    <h1 className={styles.footerTitle}>
      Blankets for Toronto
    </h1>
    <p className={styles.footerInfo}>
      An Organization at UTSC
    </p>
    <ul className={styles.navigation}>
      {
        pages.map((page) => { return (
          <li className={styles.navigationItem} key={page.desc}>
            <Link to={page.to}>{page.desc}</Link>
          </li>
          )})
      }
    </ul>
  </footer>
)
