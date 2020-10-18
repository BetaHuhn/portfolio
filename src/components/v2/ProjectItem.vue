<template>
    <section :id="project.name" class="project-item">
        <div class="half content">
            <h1>{{project.name}}</h1>
            <span>{{project.language}}</span>
            <p>{{project[content.current].description}}</p>
            <div class="actions">
                <a :href="project.link" class="action-btn" :class="{ 'development': project.link === undefined }" @mouseover="$hideCursor" @mouseleave="$showCursor">
                    {{project[content.current].linkText}}
                </a>
                <p v-if="project.github">{{content[content.current].projects.github}} <a :href="`https://github.com/${project.github}`" class="link" @mouseover="$hideCursor" @mouseleave="$showCursor">GitHub</a></p>
            </div>
        </div>
        <div class="half image">
            <div :style="{ '--image': `url(${project.image})` }" @click="show(project.image, 'right')" @mouseover="$hideCursor" @mouseleave="$showCursor"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ProjectItem',
        computed: {
            content: function () {
                return this.$store.state.content;
            }
        },
        props: {
            project: {
                name: String,
                de: {
                    description: String,
                    linkText: String
                },
                en: {
                    description: String,
                    linkText: String
                },
                link: String,
                image: String,
                language: String,
                github: String
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
    .project-item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;
        margin-bottom: 3rem;
    }

    .half{
        width: 50%;
    }

    .content h1{
        font-size: 25px;
        margin-bottom: 0;
    }

    .content span{
        color: var(--font-light)
    }

    .content p{
        max-width: 600px;
    }

    .image {
        position: relative;
        width: 50%;
        height: 400px;
    }

    .image div{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        border-radius: 15px;
        background: var(--image);
        background-position: center center;
        background-size: cover;
        box-shadow: 9px 9px 44px -25px rgba(0,0,0,0.75);
    }

    .actions {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .actions p {
        margin-left: 1rem;
    }

    .action-btn {
        padding: 10px 15px;
        border-radius: 15px;
        border: 3px solid var(--background-dark);
        cursor: pointer;
        text-decoration: none;
        background: var(--background-dark);
        color: var(--font-white);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 12px;
        font-weight: 700;
    }

    .action-btn:focus {
        border: 3px solid var(--primary);
        filter: brightness(105%);
    }

    .action-btn:active {
        transform: scale(0.95);
    }

    .development{
        opacity: .9;
        cursor: not-allowed;
    }
</style>