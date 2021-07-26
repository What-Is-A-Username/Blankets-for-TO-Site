import React from 'react' 
import Layout from '../components/layout'
import SponsorsBar from '../components/home/sponsors'
import SEO from '../components/SEO'
import Fade from 'react-reveal/Fade'

export default class Sponsors extends React.Component {
    render() {
        return(
        <Layout location={this.props.location}>
            <SEO title="Sponsors"
                description="Blankets for T.O. is proud to work with the following sponsors for donations and outreach"/>
            <div className="white-background">
                <div className="wrapper">
                    <Fade left duration={400}>
                        <h2>Sponsors</h2>
                    </Fade>
                    <Fade delay={500}>
                        <SponsorsBar/>
                    </Fade>
                </div>
            </div> 
        </Layout>
        )
    }
} 