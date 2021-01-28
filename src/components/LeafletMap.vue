<template>
	<div style="height: 100%; width: 100%">
		<l-map
			v-if="showMap"
			:zoom="zoom"
			:center="center"
			:options="mapOptions"
		>
			<l-tile-layer
				:url="url"
				:attribution="attribution"
			/>
			<l-geo-json
				:geojson="geojson"
				:options-style="styleFunction"
			/>
			<l-marker :lat-lng="marker">
				<l-icon
					:icon-anchor="staticAnchor"
					class-name="marker-icon"
				>
					<font-awesome-icon icon="mountain" size="lg" />
				</l-icon>
			</l-marker>
		</l-map>
	</div>
</template>

<script>
	import { latLng } from "leaflet";
	import {
		LMap,
		LTileLayer,
		LGeoJson,
		LMarker,
		LIcon
	} from "vue2-leaflet";
	import 'leaflet/dist/leaflet.css';
	import json from '@/utils/geo.json'

	export default {
		name: 'LeafletMap',
		data() {
			return {
				zoom: 13,
				center: latLng(47.07377, 9.71927),
				url: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				currentZoom: 11.5,
				currentCenter: latLng(47.07377, 9.71927),
				geojson: json,
				fillColor: "#e4ce7f",
				mapOptions: {
					zoomSnap: 0.5
				},
				showMap: true,
				staticAnchor: [16, 37],
				marker: latLng(47.053889, 9.707222)
			};
		},
		components: {
			LMap,
			LTileLayer,
			LGeoJson,
			LMarker,
			LIcon
		},
		methods: {
			styleFunction() {
				const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
				return () => {
					return {
						weight: 2,
						color: "#ECEFF1",
						opacity: 1,
						fillColor: fillColor,
						fillOpacity: 1
					};
				};
			},
		},
	}
</script>

<style scoped>
		.marker-icon svg{
				color: #223a59;
		}
</style>