<template>
	<div class="carousel-wrapper">
		<div class="carousel">
			<ul ref="scroller" class="scroll">
				<slot></slot>
			</ul>
		</div>
		<div class="carousel-buttons">
			<button @click="left"><font-awesome-icon icon="chevron-left" size="lg"/></button>
			<button style="margin-left: auto;" @click="right"><font-awesome-icon icon="chevron-right" size="lg" /></button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Carousel',
		data(){
			return {
				current: 0
			}
		},
		computed: {
			count(){
				return this.$refs.scroller.children.length;
			}
		},
		methods: {
			smoothScrollPolyfill: function (node, key, target) {
				const startTime = Date.now()
				const offset = node[key]
				const gap = target - offset
				const duration = 1000
				let interrupt = false

				const step = () => {
					const elapsed = Date.now() - startTime
					const percentage = elapsed / duration

					if (interrupt) {
						return
					}

					if (percentage > 1) {
						cleanup()
						return
					}

					node[key] = this.easingOutQuint(0, elapsed, offset, gap, duration)
					requestAnimationFrame(step)
				}

				const cancel = () => {
					interrupt = true
					cleanup()
				}

				const cleanup = () => {
					node.removeEventListener('wheel', cancel)
					node.removeEventListener('touchstart', cancel)
				}

				node.addEventListener('wheel', cancel, {
					passive: true
				})
				node.addEventListener('touchstart', cancel, {
					passive: true
				})

				step()

				return cancel
			},
			easingOutQuint: function (x, t, b, c, d){ // via https://github.com/tootsuite/mastodon/blob/f59ed3a4fafab776b4eeb92f805dfe1fecc17ee3/app/javascript/mastodon/scroll.js
				return c * ((t = t / d - 1) * t * t * t * t + 1) + b
			},
			hasNativeSmoothScroll: function() {
				let supports = false
				try {
					let div = document.createElement('div')
					div.scrollTo({
						top: 0,
						get behavior() {
							supports = true
							return 'smooth'
						}
					})
				} catch (err) {
					return
				} // Edge throws an error
				return supports
			},
			smoothScroll: function(node, topOrLeft, horizontal) {
				if (this.hasNativeSmoothScroll) {
					return node.scrollTo({
						[horizontal ? 'left' : 'top']: topOrLeft,
						behavior: 'smooth'
					})
				} else {
					return this.smoothScrollPolyfill(node, horizontal ? 'scrollLeft' : 'scrollTop', topOrLeft)
				}
			},
			debounce: function(func, ms) {
				let timeout
				return () => {
					clearTimeout(timeout)
					timeout = setTimeout(() => {
						timeout = null
						func()
					}, ms)
				}
			},
			left: function() {
				if(this.current > 0){
					let i = this.current - 1
					const scrollLeft = Math.floor(this.$refs.scroller.scrollWidth * (i / this.count))
					this.smoothScroll(this.$refs.scroller, scrollLeft, true)
				}else{
					return
				}
			},
			right: function() {
				if(this.current < this.count){
					let i = this.current + 1
					const scrollLeft = Math.floor(this.$refs.scroller.scrollWidth * (i / this.count))
					this.smoothScroll(this.$refs.scroller, scrollLeft, true)
				}else{
					return
				}
			}
		},
		mounted() {
			this.$nextTick(()=>{
				let self = this
				self.$refs.scroller.addEventListener('scroll', self.debounce(() => {
					console.log("test")
					let index = Math.round((self.$refs.scroller.scrollLeft / self.$refs.scroller.scrollWidth) * self.count);
					self.current = index;
				}, 200))
			});
		}
	}
</script>

<style scoped>
	.carousel-wrapper {
		width: 100%;
		position: relative;
		margin: auto;
	}

	.carousel {
		width: 100%;
		height: calc(0.3 * 100vw);
	}

	@media (max-width: 479px) {
		.carousel-wrapper,
		.carousel {
			width: 95vw;
		}
	}

	.scroll {
		display: flex;
		align-items: center;
		overflow-x: auto;
		overflow-y: hidden;
		width: 100%;
		height: 100%;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	ul.scroll {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.scroll::-webkit-scrollbar {
		display: none;
	}

	@supports (scroll-snap-align: start) {

		/* modern scroll snap points */
		.scroll {
			scroll-snap-type: x mandatory;
		}

	}

	@supports not (scroll-snap-align: start) {

		/* old scroll snap points spec */
		.scroll {
			-webkit-scroll-snap-type: mandatory;
			scroll-snap-type: mandatory;
			-webkit-scroll-snap-destination: 0% center;
			scroll-snap-destination: 0% center;
			-webkit-scroll-snap-points-x: repeat(100%);
			scroll-snap-points-x: repeat(100%);
		}

	}

	.carousel-buttons{
		position: absolute;
		z-index: 1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.carousel-buttons button{
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		border: 0;
		outline: 0;
		cursor: pointer;
		background: 0;
	}

	.carousel-buttons svg{
		font-size: 50px;
		color: #fff;
	}
</style>