import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import StyledButton from '../components/styled-button'

import styles from '../page-styles/404.module.css'

class FourOFourPage extends React.Component {

	render() {
		const title = 'Page not found'
		const contactEmail = 'blanketsforto.site@gmail.com' 
		const message = 'Sorry, the page that you are looking for cannot be found. If a broken link directed you here, you can report it to'
		const buttonText = 'Go to home page'

		return (
			<Layout location={this.props.location}>
				<SEO title="Error 404"
					description="Sorry, the page you are looking for cannot be found at Blankets for T.O. Visit the home page at https://blanketsforto.ca"
					cannonical={"https://blanketsforto.ca"}/>
				<div className="white-background">
					<div className={'wrapper'}>
						<div className='richText'>
							<h2>{title}</h2>
							<p>
								{message + ' '}
								<a href={'mailto:'+contactEmail}>{contactEmail}</a>
							</p>
						</div>
						<div className={styles.buttonSpacing}></div>
						<StyledButton link='/' buttonText={buttonText}/>
						<div className={styles.spacingBox}></div>
					</div>
				</div>
			</Layout>
		)
	}
}
	
export default FourOFourPage
	
