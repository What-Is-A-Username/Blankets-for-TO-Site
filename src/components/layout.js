import React from 'react'
import base from './base.css'
import Navigation from './navigation/navigation'

import { innerContainer } from './layout.module.css'
import Footer from './footer'

class Template extends React.Component {
	render() {
		const { children } = this.props
		return (
			<div style={{ width: "100%"}}>
				<Navigation>
					<div className={innerContainer}>
						{children}
					</div>
					<Footer/>
				</Navigation>
			</div>
		)
	}
}

export default Template
