<template>
    <div class="photo-item">
        <img :src="src">
    </div>
</template>

<script>
    export default {
        name: 'ProjectCard',
        props: {
            src: {
                type: String
            }
        }
    }
</script>

<style scope>
    .photo-item {
        background-position: center center;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
    }

    .photo-item img {
        width: 400px;
    }
</style>