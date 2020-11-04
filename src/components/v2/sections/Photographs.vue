<template>
    <section id="photographs" class="photograph-wrapper">
        <h1>
            <span class="underline">{{ $t('gallery.title') }}</span>
        </h1>
        <div class="photo-grid">
            <Photo v-for="index in photos.firstLoad" :key="index" :id="index" />
        </div>
        <i18n path="gallery.visit" tag="p">
            <template #gallery>
                <a class="link" href="/gallery" @mouseover="$hideCursor" @mouseleave="$showCursor">{{ $t('gallery.name') }}</a>
            </template>
        </i18n>
        
    </section>
</template>

<script>
    import Photo from '@/components/Photo'

    export default {
        name: 'Photographs',
        components: {
            Photo
        },
        computed: {
            photos: function () {
                return this.$store.state.photos;
            }
        }
    }
</script>

<style scoped>
    .photograph-wrapper{
        width: 80%;
        max-width: 1400px;
        margin: auto;
        margin-bottom: 7rem;
        text-align: center;
    }

    .photograph-wrapper h1{
        margin-bottom: 4rem;
    }

    .photograph-wrapper p{
        font-size: 17px;
    }

    .photo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, max(300px));
        justify-content: center;
        column-gap: 1rem;
        row-gap: 1rem;
        justify-items: center;
        max-width: 1200px;
        margin: auto;
        margin-bottom: 2rem;
    }


</style>