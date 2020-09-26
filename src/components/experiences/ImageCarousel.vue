<template>
    <section class="image-carousel">
        <div class="carousel">
            <div class="controlBtn" @click="prev()" :class="{ 'hide': current == 0 }"><font-awesome-icon icon="chevron-left" size="lg" /></div>
            <transition name="fade">
                <img :src="baseUrl + images[current]" />
            </transition>
            <div class="controlBtn" @click="next()" :class="{ 'hide': current == images.length - 1 }"><font-awesome-icon icon="chevron-right" size="lg" /></div>
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'ImageCarousel',
        data(){
            return {
                current: Math.round((this.images.length - 1) / 2)
            }
        },
        props: {
            images: Array,
            baseUrl: String
        },
        methods: {
            prev(){
                if(this.current > 0) this.current--;
            },
            next(){
                if(this.current < this.images.length - 1) this.current++;
            }
        }
       
    }
</script>

<style scoped>
    .image-carousel{
        margin-top: 8rem;
    }

    .carousel{
        display: flex;
        margin: auto;
        max-width: 1200px;
        width: 80%;
        align-items: center;
        justify-content: center;
    }

    .controlBtn{
        background: var(--primary);
        margin: 1rem;
        width: 80px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: 1;
        transition: all .2s ease;
    }

    .hide{
        opacity: 0;
        transform: scale(0.60);
    }

    img{
        opacity: 1;
        box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>