<template>
    <div id="home">
        <NavBar />
        <transition name="fade">
            <ImageModal v-if="photos.modal" :src="photos.src"></ImageModal>
        </transition>
        <div class="landing-wrapper">
            <div class="landing">
                <Console hostname="betahuhn@MaxServer" path="/about"/>
                <div id="social" class="socials">
                    <a @mouseover="$hideCursor" @mouseleave="$showCursor" href="https://github.com/BetaHuhn">
                        <font-awesome-icon title="GitHub" :icon="['fab', 'github']" size="lg" class="iconLogo" />
                    </a>
                    <a @mouseover="$hideCursor" @mouseleave="$showCursor" href="https://instagram.com/creerow">
                        <font-awesome-icon title="Instagram" :icon="['fab', 'instagram']" size="lg" class="iconLogo" />
                    </a>
                    <a @mouseover="$hideCursor" @mouseleave="$showCursor" href="https://dribbble.com/betahuhn">
                        <font-awesome-icon title="Dribbble" :icon="['fab', 'dribbble']" size="lg" class="iconLogo" />
                    </a>
                </div>
                <div id="stickTo"></div>
            </div>
        </div>
        <div class="content">
            <h1 class="headline" style="margin-bottom: 0;">{{ $t('projects') }}</h1>
            <p class="subline">{{ $t('projectsSubline') }}</p>
            <div class="content-grid">
                <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
            </div>
            <div class="navLink">
                <p>{{ $t('checkOutGitHub') }} <a href="https://github.com/betahuhn" @mouseover="$hideCursor" @mouseleave="$showCursor">GitHub</a></p>
            </div>
        </div>
        <div class="skills">
            <h1 class="headline">{{ $t('skills') }}</h1>
            <div class="skill-grid">
                <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
            </div>
        </div>
        <div class="gallery">
            <h1 class="headline" style="margin-bottom: 0;">{{ $t('gallery') }}</h1>
            <div class="navLink">
                <p>{{ $t('link.click') }} <router-link @mouseover="$hideCursor" @mouseleave="$showCursor" to="/gallery">{{ $t('link.here') }}</router-link> {{ $t('link.more') }}</p>
            </div>
            <div class="photo-grid">
                <Photo v-for="index in photos.firstLoad" :key="index" :id="index" />
            </div>
        </div>
        <hr class="devider">
        <div class="contact">
            <h1 class="headline" style="margin-bottom: 0;">{{ $t('contactHead') }}</h1>
            <p class="subline">{{ $t('contactSub') }}</p>
            <Contact />
        </div>
        <Footer />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import Console from '@/components/Console'
    import ProjectCard from '@/components/ProjectCard'
    import SkillCard from '@/components/SkillCard'
    import Photo from '@/components/Photo'
    import ImageModal from '@/components/ImageModal'
    import Footer from '@/components/Footer'
    import Contact from '@/components/Contact'

    export default {
        name: 'Home',
        components: {
            NavBar,
            Console,
            ProjectCard,
            SkillCard,
            Photo,
            ImageModal,
            Footer,
            Contact
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
            skills: {
                get: function () {
                    return this.$store.state.skills;
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
            }
        },
        methods: {
            scrollSocial: function () {
                const windowTop = window.pageYOffset;
                const top = document.getElementById("stickTo").offsetTop;
                if(windowTop > top){
                    this.socialAttached = true;
                    document.getElementById("social").classList.add('fixed-top');
                }else{
                    this.socialAttached = false;
                    document.getElementById("social").classList.remove('fixed-top');
                }
            },
            detectLang: function () {
                if (localStorage.getItem('lang')){
                    if(localStorage.getItem('lang') === 'de'){
                        localStorage.setItem('lang', 'de');
                        return this.$i18n.locale = 'de'
                    }

                    localStorage.setItem('lang', 'en');
                    return this.$i18n.locale = 'en'
                }

                if(navigator.language.includes('de')){
                    localStorage.setItem('lang', 'de');
                    return this.$i18n.locale = 'de'
                }
                
                localStorage.setItem('lang', 'en');
                return this.$i18n.locale = 'en'
            }
        },
        created() {
            this.detectLang();
            window.addEventListener('scroll', this.scrollSocial);
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollSocial);
        },
        mounted(){
            this.$showCursor;
        }
    }
</script>

<style scoped>
    #home{
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

    .landing h1 {
        font-size: 42px;
        margin: 0;
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
        width: 80%;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        color: var(--font-light)
    }

    .normal-link{
        text-decoration: none;
        color: var(--primary);
    }

    .content-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, max(400px));
        justify-content: center;
        column-gap: 1rem;
        row-gap: 1rem;
        justify-items: center;
        max-width: 1000px;
        width: 80%;
        margin: auto;
    }

    @media screen and (max-width: 500px) {
        .content-grid {
            grid-template-columns: repeat(auto-fit, max(300px));
        }
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
    }

    .skill-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, max(300px));
        justify-content: center;
        column-gap: 1.5rem;
        row-gap: 1rem;
        justify-items: center;
        max-width: 1000px;
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

    @media screen and (max-width: 750px) {
        .socials a{
            margin-right: 10px;
            margin-left: 10px;
            font-size: 20px;
        }
    }

    .fixed-top {
        position: fixed;
        top: 0;
        margin-top: 0;
        z-index: 1;
    }

    .fixed-top a {
        margin-top: 1.5rem;
        font-size: 15px;
    }

    #stickTo{
        margin-top: -80px;
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
        border: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .4s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>