<template>
    <div class="photo-item">
         <v-lazy-image :src="'/static/images/full/' + src" :src-placeholder="'/static/images/lazy/' + src" />
       <!--  <img :src="src"> -->
    </div>
</template>

<script>
    import VLazyImage from "v-lazy-image"

    export default {
        name: 'Photo',
        props: {
            src: {
                type: String
            }
        },
        components:{
            VLazyImage
        }
    }
</script>

<style scope>
    .photo-item {
        background-position: center center;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18);
    }

    .photo-item img {
        width: 100%;
        height: 100%;
        transition: 0.2s ease-in-out;
    }

    .photo-item:hover img{
        opacity: 0.8;
    }

    .v-lazy-image {
        filter: blur(10px);
        transition: filter 0.7s;
        transition-delay: 0.2s;
        border-radius: 10px;
    }
    .v-lazy-image-loaded {
        filter: blur(0);
        border-radius: 10px;
    }
</style>