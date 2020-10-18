<template>
    <section class="hero-wrapper">
        <div class="half content">
            <h1>
                {{content[content.current].title}}
                <span class="underline">Maximilian</span>
            </h1>
            <p>{{content[content.current].subtitle}}</p>
            <a href="#contact">
                <primary-btn title="Contact me">{{content[content.current].contactMe}}</primary-btn>
            </a>
        </div>
        <div class="half hero-img">
            <div @click="show('https://cdn.mxis.ch/assets/portfolio/hero.jpg', 'right')" @mouseover="$hideCursor" @mouseleave="$showCursor"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="820.664" height="709.432" viewBox="0 0 820.664 709.432"><path class="bg-svg" d="M84.514,35.223C211.51-86,320.618,24.033,492.33,55.737s249.608,10.35,291.732,103.5-48.115,138.1-123.239,269.11-41.5,247.477-189.957,257.734-338.952,1.958-435.54-160.757S-42.481,156.444,84.514,35.223Z" transform="translate(25.857 20.392)"/></svg>
        </div>
    </section>
</template>

<script>
    import PrimaryBtn from '@/components/v2/Button'

    export default {
        name: 'Hero',
        components: {
            PrimaryBtn
        },
        methods: {
            show: function (src, dir) {
                document.body.classList.add("modal-open");
                this.$store.dispatch("showImageModal", { src, dir })
            }
        },
        computed: {
            content: function () {
                return this.$store.state.content;
            }
        }
    }
</script>

<style scoped>
    .hero-wrapper {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 85%;
        max-width: 1600px;
        margin: auto;
    }

    .half{
        margin: auto;
    }

    .content{
        max-width: 450px;
    }

    .content h1{
        font-size: 40px;
        margin-bottom: 0.5rem;
    }

    .content p{
        font-size: 20px;
    }

    .hero-img {
        position: relative;
        width: 500px;
        height: 500px;
    }

    .hero-img div{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        border-radius: 15px;
        background: url("https://cdn.mxis.ch/assets/portfolio/hero.jpg");
        background-position: center center;
        background-size: cover;
        box-shadow: 9px 9px 44px -25px rgba(0,0,0,0.75);
    }
    
    .hero-img svg{
        z-index: 0;
        position: absolute;
        top: -20%;
        left: -20%;
    }

    .bg-svg{
        fill: var(--primary-light);
    }

</style>