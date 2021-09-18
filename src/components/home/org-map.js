import React, { useState, setState } from 'react'
import styles from '../home/org-map.module.css'
import { ChevronRight, ChevronLeft } from 'react-feather';
import 'leaflet'
import 'leaflet-polylinedecorator'

export default class OrgMap extends React.Component {

	state = { selectedLocation: 0, mapCenter: -1 }

	L = window['L']
	utscCoords = { lon: -79.1874, lat: 43.7830 }
	height = 400;
	width = 400;
	numLocations = 0;
	mapLocations = []
	map = undefined
	markerUrl = 'https://img.icons8.com/color/96/000000/marker--v1.png'
	arrowColor = 'rgb(0, 0, 0)'

	onMarkerClick = (locationIndex) => {
		this.setState({ mapCenter: locationIndex, selectedLocation: locationIndex })
	}

	onNext = () => {
		let newIndex = (this.state.selectedLocation + 1) % this.numLocations
		this.setState({ mapCenter: newIndex, selectedLocation: newIndex })
	}

	onLast = () => {
		let newIndex = this.state.selectedLocation - 1
		if (newIndex < 0) newIndex += this.numLocations
		this.setState({ mapCenter: newIndex, selectedLocation: newIndex })
	}

	componentDidUpdate() {
		if (this.state.mapCenter === -1)
			this.map = this.map.setView(this.utscCoords, 5);
		else
			this.map = this.map.setView({ lon: this.mapLocations[this.state.mapCenter].coordinateLongitude, lat: this.mapLocations[this.state.mapCenter].coordinateLatitude })
	}

	componentDidMount() {
		this.map = L.map('mapid', { zoomControl: false, attributionControl: true, dragging: true }).setView(this.utscCoords, 5);
		var greenIcon = L.icon({
			iconUrl: this.markerUrl,
			iconSize: [40, 40],
			iconAnchor: [20, 40],
		});
		// add the OpenStreetMap tiles
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 14,
			attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
		}).addTo(this.map);

		var markers = []
		for (let index = 0; index < this.mapLocations.length; index++) {
			const coords = [this.mapLocations[index].coordinateLatitude, this.mapLocations[index].coordinateLongitude]
			var marker = L.marker(coords, { icon: greenIcon }).addTo(this.map).on('click', () => this.onMarkerClick(index))
			let polyline = L.polyline([[this.utscCoords.lat, this.utscCoords.lon], coords], {color: '#fc5c5c', fillColor: '#fc5c5c'})
			var decorator = L.polylineDecorator(polyline, { // Add "direction arrows" to the line "polyline".
				patterns: [
					{
						offset: '100%',
						repeat: '100%', 
						symbol: L.Symbol.arrowHead({
							pixelSize: 15, 
							polygon: true, 
							pathOptions: { stroke: true, fill: true, color: '#fc5c5c', fillColor: '#fc5c5c', fillOpacity: 1 } 
						})
					},
					{ 
						offset: 15, 
						repeat: 20, 
						symbol: L.Symbol.dash({
							pixelSize: 15, 
							pathOptions: {color: '#fc5c5c', weight: 4}
						})
					},
				]
			}).addTo(this.map);
			markers.push(marker)
		}
		var featureGroup = L.featureGroup(markers).addTo(this.map);
		this.map.fitBounds(featureGroup.getBounds());
	}

	render() {
		{ console.log(L.GeometryUtil) }
		this.mapLocations = this.props.mapLocations
		this.numLocations = this.mapLocations.length;
		const locationInfo = this.mapLocations[this.state.selectedLocation]
		return (
			<div className={styles.mapContainer}>
				<h1 className={styles.title}>See where we have donated</h1>
				<p className={styles.description}>We directly connect with shelters and organizations throughout the GTA, donating essential items to those in need.</p>
				<div className={styles.infoBox}>
					<ChevronLeft onClick={() => this.onLast()} width={30} height={30} />
					<div className={styles.textBox}>
						<h1 className={styles.infoBoxTitle}>{locationInfo.name}</h1>
						<p className={styles.infoBoxAddress}>{locationInfo.street}, {locationInfo.city}, {locationInfo.provinceState} </p>
						<p className={styles.infoBoxDescription}>{locationInfo.description.description}</p>
					</div>
					<ChevronRight onClick={() => this.onNext()} width={30} height={30} />
				</div>
				<div id="mapid" className={styles.leafletMap} />
			</div>
		)
	}
}

