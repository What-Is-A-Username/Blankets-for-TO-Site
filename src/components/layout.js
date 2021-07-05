import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Navigation from './navigation'

import styles from './layout.module.css'
import Footer from './footer'

class Template extends React.Component {
	render() {
		const { location, children } = this.props
		let header

		let rootPath = `/`
		if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
			rootPath = __PATH_PREFIX__ + `/`
		}


		return (
			<div style={{ width: "100%"}}>
				<Navigation>
					<div className={styles.innerContainer}>
						{children}
					</div>
					<Footer/>
				</Navigation>
				
			</div>

		)
	}
}

export default Template
