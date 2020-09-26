<template>
    <experience-base :style="{ '--primary': '#E1C069'  }">
        <Hero title="Dolomites" subtitle="by Maximilian Schiller" image="https://assets.mxis.ch/portfolio/images/experiences/dolomites/photo-1.jpg" />
        <Intro title="Dolomites" :from="1600014400815" :to="1601057400815">
            <p>Occaecat adipisicing ex duis consequat aute laboris incididunt id ad est anim id laboris do. Minim velit amet enim esse culpa. Do dolore tempor irure sint ut in ut id qui culpa aliquip laboris. Ullamco irure nulla dolore elit excepteur amet cillum id mollit dolor. Elit adipisicing deserunt voluptate do aliqua ullamco qui sunt nostrud anim. </p> 
            <p> Ad consequat eu voluptate quis esse incididunt eu aliquip aute deserunt in. Sunt occaecat nostrud culpa aute pariatur sunt non. Magna aliqua aliquip eiusmod aliqua exercitation. Officia cupidatat aute nulla voluptate ipsum est cillum in.</p>
            <button @click="buttonLink('https://instagram.com/theflyingflo')" class="primary-button">Check him out</button>
        </Intro>
        <ImageCarousel baseUrl="https://assets.mxis.ch/portfolio/images/experiences/dolomites/" :images="carousel"/>
        <SplitView :image1="{ src: 'https://assets.mxis.ch/portfolio/images/experiences/dolomites/photo-18.jpg', title: 'Lago di Braies'}" :image2="{ src: 'https://assets.mxis.ch/portfolio/images/experiences/dolomites/photo-16.jpg', title: 'Passo Sella'}" />
        <Detail title="Big Headline" image="https://assets.mxis.ch/portfolio/images/experiences/dolomites/photo-19.jpg">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </Detail>
        <Landscape baseUrl="https://assets.mxis.ch/portfolio/images/experiences/dolomites/" :images="landscapes" />
        <Grid title="Images" subtitle="Image grid" baseUrl="https://assets.mxis.ch/portfolio/images/experiences/dolomites/" :images="grid" />
    </experience-base>
</template>

<script>
    import ExperienceBase from '@/components/ExperienceBase'
    import Hero from '@/components/experiences/Hero'
    import Intro from '@/components/experiences/Intro'
    import ImageCarousel from '@/components/experiences/ImageCarousel'
    import SplitView from '@/components/experiences/SplitView'
    import Detail from '@/components/experiences/Detail'
    import Landscape from '@/components/experiences/Landscape'
    import Grid from '@/components/experiences/Grid'

    export default {
        name: 'Dolomites',
        data() {
            return {
                carousel: ["photo-14.jpg", "photo-13.jpg", "photo-3.jpg", "photo-17.jpg", "photo-2.jpg"],
                landscapes: [{ src: "photo-21.jpg", title: "Torri del Sella"}, { src: "photo-15.jpg", title: "Piz Sella"}, { src: "photo-20.jpg", title: "Lagazuoi"}],
                grid: ["photo-4.jpg", "photo-5.jpg", "photo-6.jpg", "photo-7.jpg", "photo-8.jpg", "photo-9.jpg", "photo-10.jpg", "photo-11.jpg", "photo-12.jpg"]
            }
        },
        components: {
            ExperienceBase,
            Hero,
            Intro,
            ImageCarousel,
            SplitView,
            Detail,
            Landscape,
            Grid
        },
        computed: {
            content: {
                get: function () {
                    return this.$store.state.content;
                },
            },
            isScroll: function () {
                return this.$store.state.isScroll;
            },
        },
        methods: {
            buttonLink(link){
                window.open(link, '_blank');
            }
        }
    }
</script>

<style scoped>

    body{
        background: #b7b9c1;
    }

    .primary-button {
        -moz-appearance: none;
        appearance: none;
        border: 0;
        outline: 0;
        padding: 10px 20px;
        font-weight: 700;
        cursor: pointer;
    }

    .primary-button:focus {
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
        filter: brightness(105%);
    }

    .primary-button:active {
        transform: scale(0.95);
    }


</style>