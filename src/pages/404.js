import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SEO from '../components/SEO'

import styles404 from '../page-styles/404.module.css'

class FourOFourPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO title="Error 404"
          description="Sorry, the page you are looking for cannot be found at Blankets for T.O. Visit the home page at https://blanketsforto.ca"/>
        <div className="white-background">
          <div className="wrapper">
            <h2 className={styles404.title}>Page not found</h2>
            <p className={styles404.description}>Sorry, the page you are looking for cannot be found.</p>
            <Link to="/" className='links'>
                <button className='btn' type="submit">Go to Home Page</button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default FourOFourPage

