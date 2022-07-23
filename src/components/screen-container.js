import React from 'react'
import PropTypes from 'prop-types'

import * as styles from '../components/screen-container.module.css'

const ScreenContainer = (props, {normalHeight}) => {
	return(
		<div className={styles.screenContainer + ' ' + (!normalHeight ? styles.enforceHeight : '')}>
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

