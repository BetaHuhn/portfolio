<template>
    <div id="gallery">
        <NavBar />
        <transition name="fade">
            <ImageModal v-if="photos.modal" :src="photos.src"></ImageModal>
        </transition>
        <main>
            <div class="headline">
                <h1>
                    <span class="underline">{{content[content.current].gallery}}</span>
                </h1>
            </div>
            <div class="gallery">
                <div class="navLink">
                    <p>{{content[content.current].followInstagram}} <a class="link" @mouseover="$hideCursor" @mouseleave="$showCursor" href="https://instagram.com/creerow">Instagram</a> 👉</p>
                </div>
                <div class="photo-grid">
                    <Photo v-for="index in photos.total" :key="index" :id="index" />
                </div>
                <div class="action-wrapper">
                    <a href="/" class="action-btn" @mouseover="$hideCursor" @mouseleave="$showCursor">
                        {{content[content.current].backHome}}
                    </a>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import Photo from '@/components/Photo'
    import ImageModal from '@/components/ImageModal'
    import Footer from '@/components/Footer'

    export default {
        name: 'Gallery',
        components: {
            NavBar,
            Photo,
            ImageModal,
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
            }
        },
        created() {
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

    .navLink{
        text-align: center;
        margin-bottom: 2rem;
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
        z-index: 1;
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

    .iconLogo {
        margin-right: 1rem;
    }

    .gallery{
        margin-top: 3rem;
        margin-bottom: 3rem;
    }

    .action-wrapper{
        text-align: center;
    }

    .action-btn {
        padding: 10px 15px;
        border-radius: 15px;
        border: 3px solid var(--background-dark);
        cursor: pointer;
        text-decoration: none;
        background: var(--background-dark);
        color: var(--font-white);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 12px;
        font-weight: 700;
    }

    .action-btn:focus {
        border: 3px solid var(--primary);
        filter: brightness(105%);
    }

    .action-btn:active {
        transform: scale(0.95);
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .4s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>