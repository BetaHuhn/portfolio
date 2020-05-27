<template>
    <div id="blog">
        <NavBar />
        <div class="landing-wrapper" :style="{ backgroundImage: `url(${blog.image})`}">
            <div class="landing">
                <h1 id="blogHead" class="blogHead">{{blog[content.current].title}}</h1>
                <div id="stickTo"></div>
            </div>
        </div>
        <div class="blog-wrapper">
            <MarkdownDe v-if="content.current == 'de'" />
            <MarkdownEn v-else />
            <hr class="devider">
            <div class="blog-info">
                <p>{{blog.date}} <span>{{content[content.current].by}} Maximilian Schiller</span></p>
            </div>
        </div>
        <div class="hero">
                <router-link @mouseover="$hideCursor" @mouseleave="$showCursor" id="heroBtn" class="hero__button" to="/" style="--x:285px; --y:57px;">
                    <span>{{content[content.current].backHome}}</span>
                </router-link>
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
            },
            blog: {
                type: Object
            }
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
            this.$options.components["MarkdownDe"] = () => import(`@/markdowns/de/${this.section}/${this.blog.id}.md`);
            this.$options.components["MarkdownEn"] = () => import(`@/markdowns/en/${this.section}/${this.blog.id}.md`);
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

<style>
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

    .blog-wrapper img {
        max-width: 100%;
        display: block;
        margin: auto;
    }

    .blog-info {
        color: var(--font-light);
    }

    .blog-info span {
        font-style: italic;
    }

    .devider{
        height: 3px;
        color: var(--primary);
        background: var(--primary);
        width: 100%;
        margin-top: 4rem;
        border: 0;
    }

    blockquote {
        border-left: 3px solid var(--primary);
        margin-left: 0;
        padding-left: 10px;
        color: var(--font-light);
    }

    a {
        color: var(--primary);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    ul {
        list-style-type: none;
    }

    ul>li {
        text-indent: -5px;
    }

    ul>li:before {
        content: "-";
        text-indent: -5px;
        margin-right: 5px;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 100%;
        font: inherit;
    }

    table th {
        font-weight: bold;
        padding: 6px 13px;
    }

    thead tr{
        background-color: var(--background-light);
    }

    table td {
        padding: 6px 13px;
    }

    tbody tr {
        background-color: var(--background-light-nd);
    }

    tbody tr:nth-child(2n) {
        background-color: var(--background-light);
    }

    pre {
        background: var(--background-light);
        width: 100%;
        padding: 20px 20px;
    }

    .hero {
        display:grid;
        justify-items:center;
        grid-gap:0.8rem;
        margin:1rem 0;
        padding:0 10%;
        text-align:center;
        margin-bottom: 2rem;
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
</style>