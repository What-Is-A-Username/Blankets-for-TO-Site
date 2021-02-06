import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'


class Credits extends React.Component {

    render() {
        return(
        <Layout location={this.props.location}>
            <SEO title="Image Credits"
                description="Links to media and sources used on this site."/>
            <div className="white-background">
                <div className="wrapper">
                    <h2>Credits for Media Elements Used</h2>
                    <div id="#hamburger">
                        <p>Hamburger Menu Icon: </p>
                        {/* https://www.flaticon.com/free-icon/menu-button-of-three-horizontal-lines_56763 */}
                        <div>Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com
                            </a>
                        </div>
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