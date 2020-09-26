<template>
    <section class="split-view">
        <div class="half left">
            <img :src="image1.src" @click="show(image1.src, 'left')">
            <h3>{{image1.title}}</h3>
        </div>
        <div class="half right">
            <img :src="image2.src" @click="show(image2.src, 'right')">
            <h3>{{image2.title}}</h3>
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'SplitView',
        props: {
            image1: {
                src: String,
                title: String
            },
            image2: {
                src: String,
                title: String
            }
        },
        methods: {
            show: function (src, dir) {
                document.body.classList.add("modal-open");
                this.$store.dispatch("showImageModal", { src, dir })
            }
        }
    }
</script>

<style scoped>
    .split-view{
        margin: auto;
        margin-top: 8rem;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .half{
        width: 50%;
    }

    .left img{
        clip-path: polygon(0 0,100% 0,calc(100% - 50px) 100%,0 100%);
    }

    .right img{
        clip-path: polygon(50px 0,100% 0,100% 100%,0 100%);
    }

    img {
        width: 100%;
    }


</style>