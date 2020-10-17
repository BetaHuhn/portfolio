<template>
    <div @click="hide" class="modal" id="modal">
        <Loader v-if="!ready" :message="content[content.current].loadingImage"/>
        <span class="close" id="close">&times;</span>
        <v-lazy-image class="image-modal" :style="{ '--direction': direction === 'right' ? '60%' : direction === 'left' ? '40%' : '50%' }" :class="ready && 'showImage'" :src="src" @load="load" />
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
            src: {
                type: String
            },
            direction: {
                type: String,
                default: 'center'
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
        left: var(--direction);
        position: absolute;
        transform: translate(-50%, -50%) scale(0.8);
        box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18);
        visibility: hidden;
        opacity: 0;
        transition: all .4s ease;
    }

    .showImage{
        visibility: visible;
        opacity: 1;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
    }

    .close {
        color: var(--font-white);
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