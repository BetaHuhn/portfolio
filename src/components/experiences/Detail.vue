<template>
    <section class="detail-wrapper">
        <div class="detail">
            <div class="content">
                <h1>{{title}}</h1>
                <slot></slot>
            </div>
            <div class="image">
                <img :src="image" @click="show(image)" >
            </div>
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'Detail',
        props: {
            title: String,
            image: String
        },
        methods: {
            show: function (src) {
                document.body.classList.add("modal-open");
                this.$store.dispatch("showImageModal", { src, dir: 'right' })
            }
        }
    }
</script>

<style scoped>
    .detail-wrapper{
        width: 100%;
        margin-top: 8rem;
        background: var(--background-light);
        padding: 4rem 0px;
    }
    
    .detail{
        margin: auto;
        width: 80%;
        max-width: 1400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content{
        width: 60%;
    }

    .content p{
        max-width: 600px;
    }

    .image{
        width: 40%;
    }

    img{
        width: 100%;
    }

</style>