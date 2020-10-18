<template>
    <div>
        <NavBar />
        <main>
            <div class="headline">
                <h1>
                    <span class="underline">{{content[content.current].inprint}}</span>
                </h1>
            </div>
            <div class="inprint">
                <div class="content">
                    <h2>Address</h2>
                    <p>Maximilian Schiller<br />
                        Kronbühlstr. 11a<br />
                        78351 Bodman-Ludwigshafen</p>
                    <h2>Contact</h2>
                    <p>E-Mail: <a class="link" href="mailto:hello@mxis.ch">hello@mxis.ch</a></p>
                </div>
            </div>
        </main>
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
    main{
        margin-bottom: 5rem;
        -webkit-animation: fadein 1s;
        -moz-animation: fadein 1s;
        -ms-animation: fadein 1s;
        -o-animation: fadein 1s;
        animation: fadein 1s;
        min-height: 100vh;
    }
    
    .headline {
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 3rem;
    }

    .underline {
        position: relative;
    }

    .underline:after {
        content: "";
        position: absolute;
        bottom: -14px;
        left: -5px;
        height: 8px;
        width: calc(100% + 10px);
        border: solid 4px var(--primary);
        border-color: var(--primary) transparent transparent transparent;
        border-radius: 40%;
    }

    .link {
        position: relative;
        text-decoration: none;
        color: var(--font);
        margin: 0;
        transition: color .2s ease;
    }

    .link:after {
        content: "";
        position: absolute;
        bottom: -12px;
        left: -5px;
        height: 8px;
        width: calc(100% + 5px);
        border: solid 2px var(--primary-light);
        border-color: var(--primary-light) transparent transparent transparent;
        border-radius: 30%;
        transition: all .2s ease;
    }

    .link:hover{
        color: var(--primary);
    }

    .link:hover:after{
        bottom: -14px;
    }

    .content{
        width: 300px;
        height: 100%;
        margin: auto;
        margin-bottom: 3rem;
    }

    .content h1 {
        text-align: center;
    }

</style>