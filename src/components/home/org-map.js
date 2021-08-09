import React, { useState } from 'react'
import get from 'lodash/get'
import { Map, Marker } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import turfBbox from '@turf/bbox'
import { featureCollection as turfFeatureCollection, point as turfPoint } from '@turf/helpers'
import geoViewport from '@mapbox/geo-viewport'
import styles from '../home/org-map.module.css'
import { StaticQuery } from 'gatsby'

export default () => { 

	const height = 400; 
	const width = 400;
	var numLocations = 0;
	const [selectedLocation, setSelectedlocation] = useState(0)
	const [mapCenter, setCenter] = useState(-1)

	const locationQuery = graphql`
	query LocationQuery {
		allContentfulDonationLocation {
			nodes {
				city
				coordinateLatitude
				coordinateLongitude
				name
				provinceState
				street
				description {
				description
				}
			}
		}
	}
	`
	
	const onMarkerClick = (locationIndex) => { 
		setCenter(locationIndex)
		setSelectedlocation(locationIndex)
	}

	const onNext = () => {
		let newIndex = (selectedLocation+1) % numLocations
		setSelectedlocation(newIndex)
		setCenter(newIndex)
	}

	const onLast = () => {
		let newIndex = selectedLocation-1
		if (newIndex < 0) newIndex += numLocations
		setSelectedlocation(newIndex)
		setCenter(newIndex)
	}
	
	const centerZoomFromLocations = (givenLocs) => {
		const points = givenLocs.map(givenLocs => turfPoint([givenLocs[0], givenLocs[1]]))
		const features = turfFeatureCollection(points)
		const bounds = turfBbox(features)
		return geoViewport.viewport(bounds, [height, width], 1, 25, 256)
	}

	const render = (mapLocations) => 
	{
		{console.log(numLocations)}
		numLocations = mapLocations.length; 
		if (selectedLocation === undefined)
		{
			setSelectedlocation(mapLocations[0])
			return;
		}
		const locations = mapLocations.map(x => { return([x.coordinateLatitude, x.coordinateLongitude])})
		const zoomSettings = centerZoomFromLocations(locations); 
		return(
			<div className={styles.mapContainer}>
				<Map 
					height={height} 
					boxClassname={"custom-pigeon"}
					provider={osm}
					defaultCenter={zoomSettings.center}
					center={mapCenter === -1 ? mapCenter : locations[mapCenter]}
					zoom={zoomSettings.zoom*1.3}
					touchEvents={false}
					attribution={false}
				>
					{console.log("center is " + locations[mapCenter])}
				{
					mapLocations.map((info, index) => 
						{
							return(
								<Marker 
									width={50}
									anchor={[info.coordinateLatitude, info.coordinateLongitude]} 
									color={index === selectedLocation ? 'red' : 'pink'}
									onClick={() => onMarkerClick(index)}
									/>
									)
								}
					)
				}
				</Map>
				<div className={styles.infoBox}>
					<div onClick={onLast}>{'<'}</div>
					<div className={styles.textBox}>
						<h1 className={styles.infoBoxTitle}>{mapLocations[selectedLocation].name}</h1>
						<p className={styles.infoBoxAddress}>{mapLocations[selectedLocation].street}, {mapLocations[selectedLocation].city}, {mapLocations[selectedLocation].provinceState} </p>
						<p className={styles.infoBoxDescription}>{mapLocations[selectedLocation].description.description}</p>
					</div>
					<div onClick={onNext}>{'>'}</div>
				</div>
		</div>
		)
	}
			
	return (
		<StaticQuery query={locationQuery} 
			render={data => 
				render(data.allContentfulDonationLocation.nodes)}
		/>
	)
}
