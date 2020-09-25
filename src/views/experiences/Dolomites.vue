<template>
    <experience-base :style="{ '--primary': '#E1C069'  }">
        <Hero title="Dolomites" subtitle="by Maximilian Schiller" image="https://assets.mxis.ch/portfolio/images/experiences/dolomites/photo-1.jpg" />
        <Intro title="Dolomites" :from="1600014400815" :to="1601057400815">
            <p>Occaecat adipisicing ex duis consequat aute laboris incididunt id ad est anim id laboris do. Minim velit amet enim esse culpa. Do dolore tempor irure sint ut in ut id qui culpa aliquip laboris. Ullamco irure nulla dolore elit excepteur amet cillum id mollit dolor. Elit adipisicing deserunt voluptate do aliqua ullamco qui sunt nostrud anim. </p> 
            <p> Ad consequat eu voluptate quis esse incididunt eu aliquip aute deserunt in. Sunt occaecat nostrud culpa aute pariatur sunt non. Magna aliqua aliquip eiusmod aliqua exercitation. Officia cupidatat aute nulla voluptate ipsum est cillum in.</p>
            <button @click="buttonLink('https://instagram.com/theflyingflo')" class="primary-button">Check him out</button>
        </Intro>
        <ImageCarousel baseUrl="https://assets.mxis.ch/portfolio/images/experiences/dolomites/" :images="carousel"/>
        <div id="space"></div>
    </experience-base>
</template>

<script>
    import ExperienceBase from '@/components/ExperienceBase'
    import Hero from '@/components/experiences/Hero'
    import Intro from '@/components/experiences/Intro'
    import ImageCarousel from '@/components/experiences/ImageCarousel'

    export default {
        name: 'Dolomites',
        data() {
            return {
                carousel: ["photo-1.jpg", "photo-2.jpg", "photo-3.jpg"]
            }
        },
        components: {
            ExperienceBase,
            Hero,
            Intro,
            ImageCarousel
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

    #space {
        height: 200vh;
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