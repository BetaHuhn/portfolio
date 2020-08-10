<template>
    <div id="experience">
        <Header />
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/experiences/Header'
    import Footer from '@/components/experiences/Footer'
    export default {
        name: 'ExperienceBase',
        components: {
            Header,
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
                /*const windowTop = window.pageYOffset;
                const top = document.getElementById("stickTo").offsetTop;
                if (windowTop > top) {
                    this.socialAttached = true;
                    //document.getElementById("blogHead").classList.add('fixed-top');
                } else {
                    this.socialAttached = false;
                    //document.getElementById("blogHead").classList.remove('fixed-top');
                }*/
            },
            detectLang: function () {
                if (localStorage.getItem('lang')) {
                    if (localStorage.getItem('lang') == "de") {
                        localStorage.setItem('lang', "de");
                        this.$store.dispatch("switchLangToDe");
                    } else {
                        localStorage.setItem('lang', "en");
                        this.$store.dispatch("switchLangToEn");
                    }
                } else {
                    if (navigator.language.includes("de")) {
                        localStorage.setItem('lang', "de");
                        this.$store.dispatch("switchLangToDe");
                    } else {
                        localStorage.setItem('lang', "en");
                        this.$store.dispatch("switchLangToEn");
                    }
                }
            },
        },
        created() {
            this.detectLang();
            window.addEventListener('scroll', this.scrollSocial);
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollSocial);
        },
        mounted(){
             document.getElementById("circle").style.setProperty("--scale", "".concat(1));
        }
    }
</script>

<style scoped>

</style>