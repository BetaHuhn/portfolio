<template>
	<div class="contact-form">
		<div class="contact-content" v-if="!success && !error">
			<h1>{{ $t('contactHead') }}</h1>
			<p>{{ $t('contactSub') }}</p>
			<label for="name">{{ $t('name') }}</label>
			<input id="name" @mouseover="$hideCursor" @mouseleave="$showCursor" v-model="name" name="name" type="text" :class="nameInvalid && 'invalidInput'" placeholder="Richard Hendrix">
			<label for="email">{{ $t('email')}}</label>
			<input id="email" @mouseover="$hideCursor" @mouseleave="$showCursor" v-model="email" name="email" type="email" :class="emailInvalid && 'invalidInput'" placeholder="richard@piedpiper.com">
			<label for="message">{{ $t('message') }}</label>
			<textarea id="message" @mouseover="$hideCursor" @mouseleave="$showCursor" v-model="message" name="message" :class="messageInvalid && 'invalidInput'" :placeholder="$t('messagePlaceholder')" />
			<div class="hero">
				<a @mouseover="$hideCursor" @mouseleave="$showCursor" id="heroBtn" class="hero__button" @click="submitMessage" style="--x:285px; --y:57px;">
					<span>{{ $t('reachOut') }}</span>
				</a>
				<div class="hero__line"></div>
				<p class="p4">{{ $t('orEmail') }} <a @mouseover="$hideCursor" @mouseleave="$showCursor" class="contactLink" href="mailto:hello@mxis.ch" target="_blank">hello@mxis.ch</a></p>
			</div>
		</div>
		<p v-else-if="success" class="message success">{{ $t('success') }}</p>
		<p v-else-if="error" class="message error">{{ $t('errorContact') }}</p>
	</div>
</template>

<script>
	export default {
		name: 'Contact',
		data: function(){
			return{
				nameInvalid: false,
				emailInvalid: false,
				messageInvalid: false,
				name: '',
				email: '',
				message: ''
			}
		},
		computed: {
			success:  function () {
				return this.$store.state.contact.success;
			},
			error: function () {
				return this.$store.state.contact.error;
			}
		},
		methods: {
			submitMessage: function (){
				if(this.name.length < 1){
					this.nameInvalid = true;
				}else{
					this.nameInvalid = false;
				}
				if(this.email.length < 1 && !this.validEmail(this.email)){
					this.emailInvalid = true;
				}else{
					this.emailInvalid = false;
				}
				if(this.message.length < 1){
					this.messageInvalid = true;
				}else{
					this.messageInvalid = false;
				}
				if(!this.messageInvalid && !this.emailInvalid && !this.nameInvalid){
					this.$store.dispatch("submitMessage", {
						name: this.name,
						email: this.email,
						message: this.message,
						lang: this.$i18n.locale
					})
				}
			},
			validEmail: function (email) {
				var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}
		}
	}
</script>

<style>
	.contact-form {
		margin-bottom: 4rem;
		margin-top: 2rem;
	}

	.contact-content{
		max-width: 450px;
		width: 85%;
		margin: auto;
		display: flex;
		flex-direction: column;
	}

	.contact-content h1 {
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 0;
    }

    @media screen and (max-width: 750px) {
        .contact-content h1 {
            font-size: 20px;
        }
    }

	.contact-content p {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: var(--font-light)
    }

	.contact-content a{
		color: var(--primary);
		text-decoration: none;
	}

	.contact-content input,
	.contact-content textarea{
		display: block;
		background: var(--background-light);
		color: var(--font);
		font-size: 1rem;
		border-radius: 10px;
		border: 0;
		outline: 0;
		padding: 12px 14px;
		margin-top: 5px;
		margin-bottom: 15px;
	}

	.contact-content input:invalid,
	.contact-content textarea:invalid{
		border: 1px solid var(--red) !important;
		padding: 11px 13px !important;
	}

	.invalidInput{
		border: 1px solid var(--red) !important;
		padding: 11px 13px !important;
	}

	.hero {
		display:grid;
		justify-items:center;
		grid-gap:0.8rem;
		margin:1rem 0;
		padding:0 10%;
		text-align:center
	}
	@media (max-width:1200px) {
		.hero {
			padding:0
		}
	}
	@media (max-width:600px) {
		.hero {
			margin-top:10vh
		}
	}
	.hero__buttons {
		display:grid;
		justify-items:center;
		grid-gap:1rem
	}
	.hero__button {
		display:inline-block;
		position:relative;
		padding:1rem 2.5rem;
		background:radial-gradient(farthest-corner at var(--x,0) var(--y,0),var(--primary),var(--primary));
		text-decoration:none;
		text-align:center;
		white-space:nowrap;
		cursor:pointer;
		-webkit-user-select:none;
		-moz-user-select:none;
		-ms-user-select:none;
		user-select:none;
		border:0;
		border-radius:100px
	}
	.hero__button:after {
		content:"";
		position:absolute;
		left:3px;
		right:3px;
		top:3px;
		bottom:3px;
		background:var(--background-light);
		border-radius:inherit;
		opacity:.9;
		transition:opacity .6s cubic-bezier(.51,.92,.24,1)
	}
	.hero__button span {
		position:relative;
		color:var(--font);
		z-index:1
	}
	.hero__button:hover:after {
		opacity:.8
	}
	.hero__line {
		width:1px;
		height:25px;
		background:var(--font);
		margin: 0;
	}
	.p4 {
		margin: 0;
	}
	.contactLink {
		position:relative;
		color:var(--font);
		text-decoration:none;
		white-space:nowrap
	}
	.contactLink:after {
		content:"";
		position:absolute;
		height:2px;
		left:0;
		right:0;
		top:100%;
		background: var(--primary);
		transition:transform .3s cubic-bezier(.51,.92,.24,1)
	}
	.contactLink:hover:after {
		transform:translateY(2px)
	}
	.contactLink:active:after {
		transform:translateY(1px);
		transition:none
	}
	.message{
		text-align: center;
	}
	.success{
		color: var(--primary);
	}
	.error{
		color: var(--red);
	}
</style>