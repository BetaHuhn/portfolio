<template>
    <section id="projects" class="projects-wrapper">
        <h1>
            <span class="underline">{{content[content.current].projects.title}}</span>
        </h1>
        <div class="list">
            <ProjectItem v-for="project in projects" :key="project.name" :project="project" />
            <p>{{content[content.current].projects.checkOut}} <a class="link" href="https://github.com/betahuhn" @mouseover="$hideCursor" @mouseleave="$showCursor">GitHub</a></p>
        </div>
    </section>
</template>

<script>
    import ProjectItem from '@/components/v2/ProjectItem'

    export default {
        name: 'Projects',
        components: {
            ProjectItem
        },
        computed: {
            projects: function () {
                return this.$store.state.projects;
            },
            content: function () {
                return this.$store.state.content;
            },
        }
    }
</script>

<style scoped>
    .projects-wrapper{
        width: 80%;
        max-width: 1400px;
        margin: auto;
        margin-bottom: 7rem;
    }

    .projects-wrapper h1{
        text-align: center;
        margin-bottom: 4rem;
    }

    .projects-wrapper p{
        font-size: 17px;
    }

    .list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

</style>