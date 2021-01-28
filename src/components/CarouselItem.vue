<template>
	<li class="scroll-item-outer">
		<div class="scroll-item">
			<slot></slot>
		</div>
	</li>
</template>

<style scoped>
	.scroll-item-outer {
		width: 100%;
		height: 100%
	}

	.scroll-item {
		width: 100vw;
		height: 100%;
	}

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}

	@supports (scroll-snap-align: start) {

		.scroll-item-outer {
			scroll-snap-align: center;
		}
	}

	@supports not (scroll-snap-align: start) {

		.scroll-item-outer {
			scroll-snap-coordinate: 0 0;
		}
	}
</style>