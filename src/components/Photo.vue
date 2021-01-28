<template>
	<div class="photo-item" @mouseover="$hideCursor" @mouseleave="$showCursor">
		<v-lazy-image @click.native="show" :src="'https://cdn.mxis.ch/assets/portfolio/images/medium/photo-' + id + '.jpg'" :src-placeholder="'https://cdn.mxis.ch/assets/portfolio/images/lazy/photo-' + id + '.jpg'" :alt="id" />
	</div>
</template>

<script>
	import VLazyImage from "v-lazy-image"

	export default {
		name: 'Photo',
		props: {
			id: {
				type: Number
			}
		},
		components:{
			VLazyImage
		},
		methods: {
			show: function () {
				document.body.classList.add("modal-open");
				this.$store.dispatch("showImageModal", 'https://cdn.mxis.ch/assets/portfolio/images/full/photo-' + this.id + '.jpg')   
			}
		}
	}
</script>

<style scoped>
	.photo-item {
		background-position: center center;
		border-radius: 10px;
		position: relative;
		overflow: hidden;
		box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18);
		height: 300px;
		width: 300px;
	}

	.photo-item img {
		width: 100%;
		height: 100%;
		transition: 0.2s ease-in-out;
	}

	.photo-item:hover img{
		opacity: 0.8;
	}

	.v-lazy-image {
		filter: blur(10px);
		transition: filter 0.7s;
		transition-delay: 0.4s;
		border-radius: 10px;
	}
	.v-lazy-image-loaded {
		filter: blur(0);
		border-radius: 10px;
	}
</style>