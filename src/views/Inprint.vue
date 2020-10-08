<template>
    <div id="inprint">
        <NavBar />
        <div class="landing-wrapper">
            <div class="landing">
                <h1 id="galleryHead" class="galleryHead">{{content[content.current].inprint}}</h1>
                <div id="stickTo"></div>
            </div>
        </div>
        <div class="inprint">
            <div class="content">
                <h2>Address</h2>
                <p class="text">Maximilian Schiller<br />
                    Kronbühlstr. 11a<br />
                    78351 Bodman-Ludwigshafen</p>
                <h2>Contact</h2>
                <p class="text">E-Mail: <a href="mailto:webmaster@mxis.ch">webmaster@mxis.ch</a></p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import Footer from '@/components/Footer'

    export default {
        name: 'Inprint',
        components: {
            NavBar,
            Footer
        },
        data: function () {
            return {
                socialAttached: false
            }
        },
        computed: {
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
            this.detectLang();
            window.addEventListener('scroll', this.scrollSocial);
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollSocial);
        }
    }
</script>

<style scoped>
    #inprint{
        margin-bottom: 5rem;
        -webkit-animation: fadein 1s;
        -moz-animation: fadein 1s;
        -ms-animation: fadein 1s;
        -o-animation: fadein 1s;
        animation: fadein 1s;
    }
    .landing-wrapper {
        background: url("https://cdn.mxis.ch/assets/portfolio/backgroundBig.jpg");
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

    .content{
        width: 300px;
        height: 100%;
        margin: auto;
        margin-bottom: 3rem;
    }

    .content a {
        text-decoration: none;
        color: #60ddaf;
        font-weight: 600;
    }

    .content h1 {
        text-align: center;
    }

</style>