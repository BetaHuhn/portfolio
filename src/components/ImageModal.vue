<template>
    <div @click="hide" class="modal" id="modal">
        <Loader v-if="!ready" :message="content[content.current].loadingImage"/>
        <span class="close" id="close">&times;</span>
        <v-lazy-image class="image-modal" :class="ready && 'showImage'" :src="'/static/images/full/photo-' + id + '.jpg'" @load="load" />
    </div>
</template>

<script>
    import Loader from '@/components/Loader'
    import VLazyImage from "v-lazy-image"

    export default {
        name: 'ImageModal',
        data: function() {
            return {
                ready: false
            }
        },
        components:{
            VLazyImage,
            Loader
        },
        props: {
            id: {
                type: Number
            }
        },
        computed: {
            content: {
                get: function () {
                    return this.$store.state.content;
                }
            },
        },
        methods: {
            hide: function () {
                document.body.classList.remove("modal-open");
                this.$store.dispatch("hideImageModal", this.id)
            },
            load: function() {
                this.ready = true;
            }
        }
    }
</script>

<style scoped>
    .modal{
        position: fixed;
        z-index: 1005;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #222222a1;
    }

    .image-modal{
        max-height: 90%;
        max-width: 90%;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18);
        visibility: hidden;
    }

    .showImage{
        visibility: visible;
    }

    .close {
        color: var(--font-color);
        float: right;
        font-size: 40px;
        font-weight: bold;
        position: absolute;
        right: 50px;
        top: 25px;
        z-index: 2;
    }

    .close:hover,
    .close:focus {
        color: var(--font-color-hover);
        text-decoration: none;
        cursor: pointer;
    }
</style>