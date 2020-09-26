<template>
    <section class="landscape">
        <div class="image" :style="{ '--landscape-image': `url(${baseUrl + images[current].src})`  }"></div>
        <div class="controlBtn">
            <font-awesome-icon @click="next()" :class="{ 'hide': current == images.length - 1 }" icon="chevron-up" size="lg" />
            <font-awesome-icon @click="prev()" :class="{ 'hide': current == 0 }" icon="chevron-down" size="lg" />
        </div>
        <h2>{{images[current].title}}</h2>
    </section>
</template>

<script>
    
    export default {
        name: 'Landscape',
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
                this.current--;
            },
            next(){
                this.current++;
            }
        }
    }
</script>

<style scoped>
    
    .landscape{
        margin: auto;
        margin-top: 8rem;
        width: 80%;
        position: relative;
    }

    .image{
        width: 100%;
        height: 400px;
        background: var(--landscape-image);
        background-position: center center;
        background-size: cover;
    }

    .controlBtn{
        position: absolute;
        top: 50%;
        right: 3rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .controlBtn svg{
        font-size: 2rem;
        cursor: pointer;
        transition: all .2s ease;
    }

    .hide{
        opacity: 0;
        transform: scale(0.60);
    }

    h2{
        font-size: 1.2rem;
    }

</style>