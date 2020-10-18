<template>
    <div id="home">
        <NavBar />
        <transition name="fade">
            <ImageModal v-if="photos.modal" :src="photos.src" :direction="photos.direction"></ImageModal>
        </transition>
        <main>
            <Hero />
            <About />
            <Projects />
            <Photographs />
            <Contact />
        </main>
        <div class="spacer"></div>
        <Footer />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import ImageModal from '@/components/ImageModal'
    import Footer from '@/components/Footer'
    import Hero from '@/components/v2/sections/Hero'
    import About from '@/components/v2/sections/About'
    import Projects from '@/components/v2/sections/Projects'
    import Photographs from '@/components/v2/sections/Photographs'
    import Contact from '@/components/v2/sections/Contact'

    export default {
        name: 'Home',
        components: {
            NavBar,
            ImageModal,
            Hero,
            About,
            Projects,
            Photographs,
            Contact,
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
            detectLang: function () {
                if (localStorage.getItem('lang')){
                    if(localStorage.getItem('lang') === 'de'){
                        localStorage.setItem('lang', 'de');
                        return this.$store.dispatch("switchLangToDe");
                    }

                    localStorage.setItem('lang', 'en');
                    return this.$store.dispatch("switchLangToEn");
                }

                if(navigator.language.includes('de')){
                    localStorage.setItem('lang', 'de');
                    return this.$store.dispatch("switchLangToDe");
                }
                
                localStorage.setItem('lang', 'en');
                return this.$store.dispatch("switchLangToEn");
            },
            
        },
        created() {
            this.detectLang();
        },
        mounted(){
            this.$showCursor;
        }
    }
</script>

<style>
    #home{
        margin-bottom: 5rem;
        -webkit-animation: fadein 1s;
        -moz-animation: fadein 1s;
        -ms-animation: fadein 1s;
        -o-animation: fadein 1s;
        animation: fadein 1s;
    }

    /* During development */
    .spacer{
        height: 100vh;
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
</style>