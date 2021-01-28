<template>
	<experience-base>
		<div class="head-photo">
			<v-lazy-image :src="'https://cdn.mxis.ch/assets/portfolio/images/experiences/schesaplana/photo-0.jpg'" @load="loaded = true" />
			<div v-if="loaded" class="content-transition"></div>
		</div>
		<transition name="appear">
			<div v-if="loaded">
				<div class="headline">
					<h1>Schesaplana</h1>
				</div>
				<div v-if="!isScroll" class="scroll-icon-wrapper">
					<font-awesome-icon icon="chevron-down" size="lg" class="scroll-icon" />
				</div>
			</div>
		</transition>
		<div :style= "[loaded ? {opacity: 1} : {opacity: 0}]">
			<div class="content-main">
				<section class="section-wrapper">
					<div class="section-left">
						<h1>Lünersee - Schesaplana - Lünersee</h1>
						<p>2-Day Hiking trip with my cousin <a href="https://instagram.com/flyingflo">Florian</a>, totaling 23,3 KM and 2100 m in alltitude.</p>
					</div>
					<div class="section-right">
						<leaflet-map />
					</div>
				</section>
				<section class="image-section">
					<carousel>
						<carousel-item v-for="index in 4" :key="index">
							<v-lazy-image :src="'https://cdn.mxis.ch/assets/portfolio/images/experiences/schesaplana/photo-1.jpg'" />
						</carousel-item>
					</carousel>
				</section>
			</div>
		</div>
		<div class="main-loading" v-if="!loaded">
			<Loader :message="$t('loadingExperience')"/>
		</div>
	</experience-base>
</template>

<script>
	import ExperienceBase from '@/components/ExperienceBase'
	import Loader from '@/components/Loader'
	import Carousel from '@/components/Carousel'
	import CarouselItem from '@/components/CarouselItem'
	import LeafletMap from '@/components/LeafletMap'
	import VLazyImage from "v-lazy-image"

	export default {
		name: 'Schesaplana',
		data(){
			return {
				loaded: false
			}
		},
		components: {
			ExperienceBase,
			Loader,
			VLazyImage,
			LeafletMap,
			Carousel,
			CarouselItem
		},
		computed: {
			isScroll: function () {
				return this.$store.state.isScroll;
			},
		},
		watch: {
			loaded: function(newValue){
				if(newValue){
					document.getElementById('footerExperience').style.backgroundColor = "#b0b7c9"
				}
			}
		}
	}
</script>

<style scoped>
	body{
		background: #b7b9c1;
	}

	.main-loading{
		height: 100vh;
	}

	.head-photo{
		position: relative;
	}

	.head-photo img{
		width: 100%;
		display: block;
	}

	.headline{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.headline h1{
		font-size: 50px;
	}

	.scroll-icon-wrapper{
		position: absolute;
		left: 50%;
		top: 90%;
		transform: translate(-50%, -50%);
		animation: move 5s infinite;
	}

	.scroll-icon{
		font-size: 40px;
	}

	@keyframes move {
		0% {
			top: 90%;
		}

		30% {
			top: 93%;
		}

		60% {
			top: 90%;
		}

		100% {
			top: 90%;
		}
	}

	.v-lazy-image {
		opacity: 0;
		transition: all 0.3s ease-in;
	}
	.v-lazy-image-loaded {
		opacity: 1;
	}

	.appear-enter-active, .appear-leave-active {
		transition: all 0.5s;
		transition-delay: 1s;
	}
	.appear-enter, .appear-leave-to{
		opacity: 0;
		top: 55%;
	}
	
	.content-transition{
		height: 150px;
		width: 100%;
		background: linear-gradient(#b0b7c900, #b0b7c9);
		position: absolute;
		bottom: 0;
	}

	.content-main{
		background: #b0b7c9;
		color: #000;
	}

	.section-wrapper{
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		height: 700px;
	}

	.section-right{
		width: 100%
	}

	.section-left{
		width: 100%;
		color: #223a59;
		text-align: center;
		align-self: center;
	}

	.section-left a{
		color: #1855a4;
		text-decoration: none;
	}

	.image-section{
		display: flex;
		margin-top: 4rem;
	}

	.image-item img{
		width: 100%;
	}
</style>