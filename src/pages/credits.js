import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import styles from '../page-styles/credits.module.css'

class Credits extends React.Component {

    render() {
		const contactEmail = 'blanketsforto.site@gmail.com' 

        return(
        <Layout location={this.props.location}>
            <SEO title='Media Credits'
                description='Access the links and attributions to creators of images and other media used on this site.'
                doNotCrawl/>
            <div className="white-background">
                <div className="wrapper richText">
                    <h2>Media Credits</h2>
                    <p>This page contains attributions to media resources used on this site.</p>
                    <div className={styles.topPadding}/>
                    <div className={styles.iconAttribution}>
                        <p>Social Media and Navigation Icons: </p>
                        {/* https://www.flaticon.com/free-icon/menu-button-of-three-horizontal-lines_56763 */}
                        <div>Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        <p>Social Media Icons (Footer, Contact page)</p>
                        {/* https://www.iconfinder.com */}
                        <div>Icons made by <a href="https://www.iconfinder.com/social-media-icons/" title="Iconfinder Users"> Flatart, Iconfinder, mattbadal, Anton D </a> from <a href="https://www.iconfinder.com/social-media-icons/" title="IconFinder">www.iconfinder.com</a></div>
                        <p>GitHub Icon</p>
                        {/* https://www.flaticon.com/free-icon/github_1051275 */}
                        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        <p>Website Link Icon</p>
                        {/* https://www.flaticon.com/premium-icon/web_3178162 */}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/uniconlabs" title="Uniconlabs">Uniconlabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        <p>Email Icon</p>
                        {/* https://www.flaticon.com/packs/social-media-icons */}
                        <div>Icons made by <a href="https://www.flaticon.com/authors/cursor-creative" title="Cursor Creative">Cursor Creative</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        <div className={styles.bottomPadding}></div>
                        <p className={styles.message}>If you are a creator and believe that your content was unfairly used or attributed, please contact us at <a href={'mailto:'+contactEmail}>{contactEmail}</a></p>
                    </div> 
                </div>
            </div> 
        </Layout>
        )
    }

}

export default Credits

export const creditsQuery = graphql`
  query CreditsQuery {
    site {
      siteMetadata {
        title
      }
    }
}
`