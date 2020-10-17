<template>
	<div id="app">
		<div id="circle" class="cursor" style="--x:381px; --y:501px; --scale:1; --size:42px;"></div>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
		methods: {
			handleMouseMove: function (event) {
				let x = event.clientX;
				let y = event.clientY;
				let circle = document.getElementById("circle");
				circle.style.setProperty("--x", "".concat(x, "px"));
				circle.style.setProperty("--y", "".concat(y, "px"));
			}
		},
		computed: {
			photos: {
					get: function () {
							return this.$store.state.photos;
					}
			},
		},
		mounted() {
			window.addEventListener('mousemove', this.handleMouseMove);
		}
	}
</script>

<style>
	:root {
		--font: #292929;
		--font-white: #fff;
		--font-light: #858585;
		--background: #fff;
		--background-dark: #000;
		--primary: #60ddaf;
		--primary-light: #c7fbe8;
		--red: #d94141;
	}

	html,
	body {
		width: 100%;
		margin: 0;
		padding: 0;
		outline: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		background: var(--background);
		color: var(--font);
		cursor: url("/static/cursor.svg") 3 3, auto;
	}

	.modal-open {
		width: 100%;
	}

	.cursor {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		height: var(--size);
		width: var(--size);
		z-index: 1000;
		transform: translate(calc(var(--x) - var(--size)/2), calc(var(--y) - var(--size)/2));
		transition: 0.1s cubic-bezier(.25, .25, .42, 1) transform;
		pointer-events: none;
		will-change: transform;
	}

	@media (pointer:fine) {
		.cursor {
			display: block;
		}
	}

	.cursor::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 100%;
		border: 2px solid hsla(0, 0%, 71%, 0.6);
		opacity: var(--scale);
		transform: scale(var(--scale));
		transition-duration: .3s;
		transition-timing-function: cubic-bezier(.25, .25, .42, 1);
		transition-property: opacity, transform;
	}

	.circleHide {
		opacity: 0 !important;
	}

	.noselect {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	@keyframes fadein {
		from {
			opacity: 0.2;
		}

		to {
			opacity: 1;
		}
	}
</style>