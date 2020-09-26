<template>
    <section class="image-grid">
        <div class="content">
            <h1>{{title}}</h1>
            <p>{{subtitle}}</p>
        </div>
        <div class="images">
            <img v-for="image in images" :key="image" :src="baseUrl + image" @click="show(baseUrl + image)" @mouseover="$hideCursor" @mouseleave="$showCursor">
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'Grid',
        props: {
            title: String,
            subtitle: String,
            images: Array,
            baseUrl: String
        },
        methods: {
            show: function (src) {
                document.body.classList.add("modal-open");
                this.$store.dispatch("showImageModal", src)
            }
        }
    }
</script>

<style scoped>
    
    .image-grid{
        margin: auto;
        margin-top: 8rem;
        width: 90%;
        text-align: center;
    }

    .content h1{
        margin: 0;
        font-size: 1.8rem;
    }

    .content p{
        margin: 0;
    }

    .images {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    img{
        max-width: 30%;
        margin: 10px;
        box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18);
    }

</style>