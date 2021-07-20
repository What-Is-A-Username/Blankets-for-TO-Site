import React, { useState, useRef, useEffect } from 'react'
import { Map, Marker } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import turfBbox from '@turf/bbox'
import { featureCollection as turfFeatureCollection, point as turfPoint } from '@turf/helpers'
import geoViewport from '@mapbox/geo-viewport'
import styles from '../home/org-map.module.css'

export default () => { 

	const height = 800; 
	const width = 400;
	// const mapRef = useRef(null) 

	const locations = [[43.853, -79.081111], [43.654925, -79.640207], [44.044940, -79.469373]]
	
	const centerZoomFromLocations = (givenLocs) => {
		console.log("recalculating with h:w " + height + " " + width)
		const points = givenLocs.map(givenLocs => turfPoint([givenLocs[0], givenLocs[1]]))
		const features = turfFeatureCollection(points)
		const bounds = turfBbox(features)
		return geoViewport.viewport(bounds, [height, width], 1, 13, 256)
	}
	

	const zoomSettings = centerZoomFromLocations(locations); 
	const mapObject = 
	<Map 
	  	// ref={mapRef}
		height={height} 
		boxClassname={"custom-pigeon"}
		center={zoomSettings.center}
		zoom={zoomSettings.zoom}
		mouseEvents={false}
		touchEvents={false}
		attribution={false}>
	{
		locations.map(x => 
			{
				return(
					<Marker 
						width={50}
						anchor={x} 
						color={'red'}
					/>
					)
			}
		)
	}
	</Map>
			
	return (
		<div className={styles.mapContainer}>
			{mapObject}
			{console.log(mapObject)}
		</div>
	)
}