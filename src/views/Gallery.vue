<template>
    <div id="gallery">
        <NavBar />
        <div class="landing-wrapper">
            <div class="landing">
                <h1 id="galleryHead" class="galleryHead">{{content[content.current].gallery}}</h1>
                <div id="stickTo"></div>
            </div>
        </div>
        <div class="gallery">
            <div class="navLink">
                <a @mouseover="$hideCursor" @mouseleave="$showCursor" href="https://instagram.com/creerow">{{content[content.current].followInstagram}}</a><span> 👉</span>
            </div>
            <div class="photo-grid">
                <Photo v-for="index in photos.total" :key="index" :src="'photo-' + index + '.jpg'" />
            </div>
            <div class="hero">
                <router-link @mouseover="$hideCursor" @mouseleave="$showCursor" id="heroBtn" class="hero__button" to="/" style="--x:285px; --y:57px;">
                    <span>{{content[content.current].backHome}}</span>
                </router-link>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import Photo from '@/components/Photo'
    import Footer from '@/components/Footer'

    export default {
        name: 'Gallery',
        components: {
            NavBar,
            Photo,
            Footer
        },
        data: function () {
            return {
                socialAttached: false
            }
        },
        computed: {
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
                const windowTop = window.pageYOffset;
                const top = document.getElementById("stickTo").offsetTop;
                if(windowTop > top){
                    this.socialAttached = true;
                    document.getElementById("galleryHead").classList.add('fixed-top');
                }else{
                    this.socialAttached = false;
                    document.getElementById("galleryHead").classList.remove('fixed-top');
                }
            },
            detectLang: function () {
                if (localStorage.getItem('lang')){
                    if(localStorage.getItem('lang') == "de"){
                        localStorage.setItem('lang', "de");
                        this.$store.dispatch("switchLangToDe");
                    }else{
                        localStorage.setItem('lang', "en");
                        this.$store.dispatch("switchLangToEn");
                    }
                }else{
                    if(navigator.language.includes("de")){
                        localStorage.setItem('lang', "de");
                        this.$store.dispatch("switchLangToDe");
                    }else{
                        localStorage.setItem('lang', "en");
                        this.$store.dispatch("switchLangToEn");
                    }	
                }	 
            }   
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

<style scoped>
    #gallery{
        margin-bottom: 5rem;
        -webkit-animation: fadein 1s;
        -moz-animation: fadein 1s;
        -ms-animation: fadein 1s;
        -o-animation: fadein 1s;
        animation: fadein 1s;
    }
    .landing-wrapper {
        /* background-color: rgb(117, 117, 117); */
        background: url("/static/backgroundBig.jpg");
        background-position: center center;
        background-size: cover;
    }

    .landing {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
    }

    .headline {
        text-align: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }

    @media screen and (max-width: 750px) {
        .headline{
            font-size: 20px;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }

    .subline {
        text-align: center;
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    .photo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, max(300px));
        justify-content: center;
        column-gap: 1rem;
        row-gap: 1rem;
        justify-items: center;
        max-width: 1200px;
        margin: auto;
        margin-bottom: 3rem;
    }


    .galleryHead {
        font-size: 40px;
        margin: 0;
        margin-top: -60px;
    }

    .fixed-top {
        position: fixed;
        top: 0;
        margin-top: 15px;
        z-index: 1001;
        font-size: 25px;
    }

    @media screen and (max-width: 750px) {
        .galleryHead{
            margin-right: 10px;
            margin-left: 10px;
            font-size: 30px;
        }
        .fixed-top {
            font-size: 18px;
            margin-top: 22px;
        }
    }

    #stickTo{
        margin-top: -80px;
    }

    .iconLogo {
        margin-right: 1rem;
    }

    .gallery{
        margin-top: 3rem;
        margin-bottom: 3rem;
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

    .navLink{
        text-align: center;
        margin-bottom: 2rem;
    }

    .navLink a {
        position: relative;
        color: var(--font);
        text-decoration: none;
        white-space: nowrap;
        font-size: 20px;
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
</style>