import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import styles from '../page-styles/index.module.css'
import styles404 from '../page-styles/404.module.css'

class FourOFourPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <div className="white-background">
          <div className="wrapper">
            <h2 className={styles404.title}>Page not found</h2>
            <p className={styles404.description}>Sorry, the page you are looking for cannot be found.</p>
            <Link to="/" className={styles.links}>
                <button className={styles.btn} type="submit">Go to Home Page</button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default FourOFourPage

