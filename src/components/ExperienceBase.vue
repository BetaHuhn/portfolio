<template>
	<div id="experience">
		<Header />
		<transition name="fade">
			<ImageModal v-if="photos.modal" :src="photos.src" :direction="photos.direction"></ImageModal>
		</transition>
		<main>
			<slot></slot>
		</main>
		<Footer />
	</div>
</template>

<script>
	import Header from '@/components/experiences/Header'
	import Footer from '@/components/experiences/Footer'
	import ImageModal from '@/components/ImageModal'

	export default {
		name: 'ExperienceBase',
		components: {
			Header,
			Footer,
			ImageModal
		},
		data: function () {
			return {
				socialAttached: false
			}
		},
		computed: {
			photos: function () {
				return this.$store.state.photos;
			},
		},
		methods: {
			detectLang: function () {
				if (localStorage.getItem('lang')) {
					if (localStorage.getItem('lang') == "de") {
						localStorage.setItem('lang', "de");
						this.$store.dispatch("switchLangToDe");
					} else {
						localStorage.setItem('lang', "en");
						this.$store.dispatch("switchLangToEn");
					}
				} else {
					if (navigator.language.includes("de")) {
						localStorage.setItem('lang', "de");
						this.$store.dispatch("switchLangToDe");
					} else {
						localStorage.setItem('lang', "en");
						this.$store.dispatch("switchLangToEn");
					}
				}
			},
		},
		created() {
			this.detectLang();
		},
		mounted(){
			document.getElementById("circle").style.setProperty("--scale", "".concat(1));
		}
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: all .4s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>