<template>
    <div id="blog">
        <NavBar />
        <div class="landing-wrapper">
            <div class="landing">
                <h1 id="blogHead" class="blogHead">{{title}}</h1>
                <div id="stickTo"></div>
            </div>
        </div>
        <div class="blog-wrapper">
            <div class="blog-item" v-for="item in blog[section]" :key="item.id" @mouseover="$hideCursor" @mouseleave="$showCursor">
                <router-link :to="`/${section}/${item.id}`">
                <div class="blog-title">
                    <h2>{{item[content.current].title}}</h2>
                </div>
                <div class="blog-content">
                    <p>{{item[content.current].description}}</p>
                    <div class="blog-bottom">
                        <span>{{item.date}}</span>
                        <font-awesome-icon icon="arrow-right" size="lg" class="arrowIcon" />
                    </div>
                </div>
                </router-link>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import Footer from '@/components/Footer'
    import '../../node_modules/highlight.js/styles/vs2015.css'
    export default {
        name: 'Home',
        components: {
            NavBar,
            Footer
        },
        props: {
            section: {
                type: String
            }
        },
        data: function () {
            return {
                socialAttached: false
            }
        },
        computed: {
            blog: {
                get: function () {
                    return this.$store.state.blog;
                }
            },
            content: {
                get: function () {
                    return this.$store.state.content;
                },
            },
            title: {
                get: function(){
                    return this.section.charAt(0).toUpperCase() + this.section.slice(1)
                }
            }
        },
        methods: {
            scrollSocial: function () {
                const windowTop = window.pageYOffset;
                const top = document.getElementById("stickTo").offsetTop;
                if (windowTop > top) {
                    this.socialAttached = true;
                    document.getElementById("blogHead").classList.add('fixed-top');
                } else {
                    this.socialAttached = false;
                    document.getElementById("blogHead").classList.remove('fixed-top');
                }
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
    #blog {
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
        .headline {
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

    .blogHead {
        font-size: 40px;
        margin: 0;
        margin-top: -60px;
    }

    .fixed-top {
        position: fixed;
        top: 0;
        margin-top: 15px;
        z-index: 1;
        font-size: 25px;
    }

    @media screen and (max-width: 750px) {
        .blogHead {
            margin-right: 10px;
            margin-left: 10px;
            font-size: 30px;
        }

        .fixed-top {
            font-size: 18px;
            margin-top: 22px;
        }
    }

    #stickTo {
        margin-top: -80px;
    }

    .iconLogo {
        margin-right: 1rem;
    }

    .blog-wrapper {
        max-width: 800px;
        margin: auto;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }

    .blog-item{
        background: var(--background-light);
        border-radius: 10px;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    .blog-item a{
        text-decoration: none;
        color: var(--font);
    }

    .blog-title{
        border-bottom: 1px solid var(--background);
        padding: 20px;
    }

    .blog-title h2{
        margin: 0;
    }

    .blog-content{
        padding: 20px;
    }

    .blog-content p{
        margin-top: 0;
    }

    .blog-bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--primary);
    }

    .arrowIcon{
        font-size: 30px;
        color: var(--primary);
    }

</style>