import React from 'react'
import PropTypes from 'prop-types'

import { screenContainer, enforceHeight }from '../components/screen-container.module.css'

const ScreenContainer = (props, {normalHeight}) => {
	return(
		<div className={screenContainer + ' ' + (!normalHeight ? enforceHeight : '')}>
			{props.children}
		</div>
	)
}

export default ScreenContainer

ScreenContainer.propTypes = {
	normalHeight: PropTypes.bool,
}

ScreenContainer.defaultProps = {
	normalHeight: false,
}

