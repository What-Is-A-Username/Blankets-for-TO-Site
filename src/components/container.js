import React from 'react'
import PropTypes from 'prop-types'

const Container = (props, {title}) => {
	return(
		<div className="white-background">
			<div className="wrapper">
				{/* Description, centered  */}
				<h2>{props.title}</h2>
				{props.children}
			</div>
		</div>
	)
}

export default Container

Container.propTypes = {
	title: PropTypes.string.isRequired,
}
