import React from 'react'

import styles from './position.module.css'

export default ({ data }) => (
	<div className={styles.positionCard} key={data.title}>
		<h2 className={styles.title}>{data.title}</h2>
		<p className={styles.subtitle}>{"Description"}</p>
		<p className={styles.description}>{data.description ?? "Contact for more details."}</p>
		<p className={styles.subtitle}>{"Requirements"}</p>
		<p className={styles.requirements}>{(data.requirements ?? "No materials required.")}</p>
		<p className={styles.subtitle}>{"Submission"}</p>
		<p className={styles.submission}>{(data.submission ?? "Contact us via email.")}</p>
		<h4 className={styles.deadline}>{"Deadline:  " + data.deadline}</h4>
	</div>
)
