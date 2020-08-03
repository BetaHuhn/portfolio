<template>
    <experience-base>
        <div class="head-photo">
            <v-lazy-image :src="'/static/images/experience/photo-0.jpg'" @load="loaded = true" />
            <div v-if="loaded" class="content-transition"></div>
        </div>
        <transition name="appear">
            <div v-if="loaded" class="headline">
                <h1>Schesaplana</h1>
            </div>
        </transition>
        <div :style= "[loaded ? {opacity: 1} : {opacity: 0}]">
            <div class="content-main">
                <section class="section-wrapper">
                    <div class="section-left">
                        <h1>Lünersee - Schesaplana - Lünersee</h1>
                        <p>2-Day Hiking trip with my cousin <a href="https://instagram.com/flyingflo">Florian</a>, totaling 23,3 KM and 2100 m in alltitude.</p>
                    </div>
                    <div class="section-right">
                        <leaflet-map />
                    </div>
                </section>
            </div>
        </div>
        <div class="main-loading" v-if="!loaded">
            <Loader :message="content[content.current].loadingExperience"/>
        </div>
    </experience-base>
</template>

<script>
    import ExperienceBase from '@/components/ExperienceBase'
    import Loader from '@/components/Loader'
    import LeafletMap from '@/components/LeafletMap'
    import VLazyImage from "v-lazy-image"

    export default {
        name: 'Schesaplana',
        data(){
            return {
                loaded: false
            }
        },
        components: {
            ExperienceBase,
            Loader,
            VLazyImage,
            LeafletMap
        },
        computed: {
            content: {
                get: function () {
                    return this.$store.state.content;
                },
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>

    body{
        background: #b7b9c1;
    }

    .main-loading{
        height: 100vh;
    }

    .head-photo{
        position: relative;
    }

    .head-photo img{
        width: 100%;
        display: block;
    }

    .headline{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .headline h1{
        font-size: 50px;
    }

    .v-lazy-image {
        opacity: 0;
        transition: all 0.3s ease-in;
    }
    .v-lazy-image-loaded {
        opacity: 1;
    }

    .appear-enter-active, .appear-leave-active {
        transition: opacity 0.3s;
        transition-delay: 1s;
    }
    .appear-enter, .appear-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    
    .content-transition{
        height: 150px;
        width: 100%;
        background: linear-gradient(#b0b7c900, #b0b7c9);
        position: absolute;
        bottom: 0;
    }

    .content-main{
        height: 100vh;
        background: #b0b7c9;
        color: #000;
    }

    .section-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        height: 80%;
    }

    .section-right{
        width: 100%
    }

    .section-left{
        width: 100%;
        color: #223a59;
        text-align: center;
        align-self: center;
    }

    .section-left a{
        color: #1855a4;
        text-decoration: none;
    }
</style>