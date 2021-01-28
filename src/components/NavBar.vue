<template>
	<div id="header" class="navbar noselect" :class="isScroll && 'headerScroll'">
		<router-link to="/" class="nolink" >
			<div class="logo" @mouseover="$hideCursor" @mouseleave="$showCursor">
				<img alt="logo" width="40px" src="/static/logo.png">
				<p>Maximilian Schiller</p>
			</div>
		</router-link>
		<div class="nav" v-if="!modal">
			<p class="link" @mouseover="$hideCursor" @mouseleave="$showCursor" :class="language === 'en' && 'primary'" @click="switchLangToEn">en</p>
			<p>/</p>
			<p class="link" @mouseover="$hideCursor" @mouseleave="$showCursor" :class="language === 'de' && 'primary'" @click="switchLangToDe">de</p>
		</div>
	</div>
</template>

<script>
  export default {
	name: 'NavBar',
	computed: {
		language: function () {
			return this.$i18n.locale
		},
		modal: {
			get: function () {
				return this.$store.state.photos.modal;
			}
		},
		isScroll: function () {
			return this.$store.state.isScroll;
		},
	},
	methods: {
		scrollFunction: function () {
			if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			this.$store.commit('changeIsScroll', true)
			} else {
			this.$store.commit('changeIsScroll', false)
			}
		},
		switchLangToEn: function () {
			localStorage.setItem('lang', "en");
			this.$i18n.locale = 'en'
		},
		switchLangToDe: function () {
			localStorage.setItem('lang', "de");
			this.$i18n.locale = 'de'
		}
	},
	created() {
		window.addEventListener('scroll', this.scrollFunction);
	},
	destroyed() {
		window.removeEventListener('scroll', this.scrollFunction);
	}
  }
</script>

<style scope>
  .navbar {
	position: fixed;
	z-index: 1;
	top: 0;
	width: 100%;
	height: 70px;
	font-size: 20px;
	transition: 0.2s ease-in-out;
	-webkit-transition: 0.2s ease-in-out;
	-moz-transition: 0.2s ease-in-out;
	-o-transition: 0.2s ease-in-out;
  }

  .headerScroll {
	background: var(--background-light);
	box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18);
  }

  .nav {
	display: flex;
	float: right;
	margin-right: 2rem;
  }

  .link {
	text-decoration: none;
	color: var(--font);
	margin: 1.2rem;
	cursor: pointer;
  }

  .primary {
	color: var(--primary)
  }

  .logo {
	float: left;
	margin-left: 2rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
  }

  .logo img {
	margin-right: 1rem;
  }

  .nolink{
	text-decoration: none;
	color: var(--font);
  }

  @media screen and (max-width: 1000px) {
	.logo{
		margin-left: 1rem;
	}
	.logo p{
		display: none;
	}
	.logo img {
		margin-top: 15px;
	}
  }

  @media screen and (max-width: 750px) {
	.link{
		margin-right: 5px;
		margin-left: 5px;
	}

	.nav{
		margin-right: 1rem;
	}
  }
</style>