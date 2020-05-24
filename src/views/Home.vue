<template>
    <div id="home">
        <NavBar />
        <div class="landing-wrapper">
            <div class="landing">
                <Console hostname="betahuhn@MaxServer" path="/about" :messages="content[content.current].messages"
                    :endText="content[content.current].endText" />
                <div id="social" class="socials">
                    <a href="https://github.com/BetaHuhn">
                        <font-awesome-icon :icon="['fab', 'github']" size="lg" class="iconLogo" /></a>
                    <a href="https://instagram.com/creerow">
                        <font-awesome-icon :icon="['fab', 'instagram']" size="lg" class="iconLogo" /></a>
                    <a href="https://dribbble.com/creerow">
                        <font-awesome-icon :icon="['fab', 'dribbble']" size="lg" class="iconLogo" /></a>
                </div>
            </div>
        </div>
        <div class="content">
            <h1 class="headline">{{content[content.current].projects}}</h1>
            <div class="content-grid">
                <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
            </div>
        </div>
        <div class="gallery">
            <h1 class="headline" style="margin-bottom: 0;">{{content[content.current].gallery}}</h1>
            <div class="navLink">
                <p>{{content[content.current].link.click}} <a href="/gallery">{{content[content.current].link.here}}</a> {{content[content.current].link.more}}</p>
            </div>
            <div class="photo-grid">
                <Photo v-for="index in photos.firstLoad" :key="index" :src="'/static/images/photo-' + index + '.jpg'" />
            </div>
        </div>
        <hr class="devider">
        <div class="contact">
            <h1 class="headline">{{content[content.current].contactHead}}</h1>
            <p class="subline">{{content[content.current].contactSub}}</p>
            <div class="contact-content">
                <label for="name">{{content[content.current].name}}</label>
                <input name="name" placeholder="Richard Hendrix">
                <label for="email">{{content[content.current].email}}</label>
                <input name="email" placeholder="richard@piedpiper.com">
                <label for="message">{{content[content.current].message}}</label>
                <textarea name="message" :placeholder="content[content.current].messagePlaceholder" />
                <div class="hero">
                    <a id="heroBtn" class="hero__button" href="/login" style="--x:285px; --y:57px;">
                    <span>{{content[content.current].reachOut}}</span>
                    </a>
                    <div class="hero__line"></div>
                    <p class="p4">{{content[content.current].orEmail}} <a class="contactLink" href="mailto:hello@mxis.ch" target="_blank">hello@mxis.ch</a></p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import Console from '@/components/Console'
    import ProjectCard from '@/components/ProjectCard'
    import Photo from '@/components/Photo'
    import Footer from '@/components/Footer'

    export default {
        name: 'Home',
        components: {
            NavBar,
            Console,
            ProjectCard,
            Photo,
            Footer
        },
        data: function () {
            return {
                socialAttached: false
            }
        },
        computed: {
            bashConsole: {
                get: function () {
                    return this.$store.state.bashConsole;
                }
            },
            projects: {
                get: function () {
                    return this.$store.state.projects;
                }
            },
            photos: {
                get: function () {
                    return this.$store.state.photos;
                }
            },
            content: {
                get: function () {
                    return this.$store.state.content;
                },
            },
        },
        methods: {
            scrollSocial: function () {
                if (!this.socialAttached && window.scrollY > 300) {
                    this.socialAttached = true;
                    document.getElementById("social").classList.add('fixed-top');
                }
                if (this.socialAttached && window.scrollY < 300) {
                    this.socialAttached = false;
                    document.getElementById("social").classList.remove('fixed-top');
                }
            },
            detectLang: function () {
                console.log(navigator.language)
                if(navigator.language.includes("de")){
                    this.$store.dispatch("switchLangToDe");
                }else{
                    this.$store.dispatch("switchLangToEn");
                }		 
            },
                    
        },
        created() {
            window.addEventListener('scroll', this.scrollSocial);
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollSocial);
        },
        mounted(){
            this.detectLang();
        }
    }
</script>

<style lang="scss">
    #home{
        margin-bottom: 5rem;
    }
    .landing-wrapper {
        /* background-color: rgb(117, 117, 117); */
        background: url("/static/backgroundBig.jpg");
        background-position: center center;
    }

    .landing {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
    }

    .landing h1 {
        font-size: 42px;
        margin: 0;
    }

    .headline {
        text-align: center;
        margin: 3rem;
    }

    .subline {
        text-align: center;
        margin-top: -2.5rem;
    }

    .content-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, max(500px));
        justify-content: center;
        column-gap: 3rem;
        row-gap: 2rem;
        justify-items: center;
        max-width: 80%;
        width: 80%;
        margin: auto;
    }

    .photo-grid {
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr; */
        grid-template-columns: repeat(auto-fit, max(400px));
        justify-content: center;
        column-gap: 3rem;
        row-gap: 2rem;
        justify-items: center;
        max-width: 80%;
        margin: auto;
    }

    .socials {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        transition: 0.1s ease-in-out;
    }

    .socials a {
        color: var(--font);
        text-decoration: none;
        margin: 2rem;
        font-size: 25px;
    }

    .fixed-top {
        position: fixed;
        top: 0;
        margin-top: 0;
        z-index: 1001;
    }

    .fixed-top a {
        margin-top: 1.5rem;
        font-size: 15px;
    }

    .iconLogo {
        margin-right: 1rem;
    }
    
    .navLink{
        text-align: center;
        margin-bottom: 2rem;
    }
    .navLink p{
        color: var(--font-light)
    }
    .navLink a {
        position: relative;
        color: var(--font-light);
        text-decoration: none;
        white-space: nowrap;
    }

    .navLink a:after {
        content: "";
        position: absolute;
        height: 2px;
        left: 0;
        right: 0;
        top: 100%;
        background: var(--primary);
        transition: transform .3s cubic-bezier(.51, .92, .24, 1)
    }

    .navLink a:hover:after {
        transform: translateY(2px)
    }

    .navLink a:active:after {
        transform: translateY(1px);
        transition: none
    }
    .devider{
        height: 3px;
        color: var(--primary);
        background: var(--primary);
        max-width: 600px;
        width: 80%;
        margin-top: 4rem;
    }  

    .contact{
        margin-bottom: 4rem;
    }

    .contact-content{
        max-width: 450px;
        width: 85%;
        margin: auto;
        display: flex;
        flex-direction: column;
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

</style>