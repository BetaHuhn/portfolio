<template>
    <section class="projects-wrapper">
        <h1>
            <span class="underline">Recent Projects</span>
        </h1>
        <div class="list">
            <ProjectItem v-for="project in projects" :key="project.name" :project="project" />
            <p>Check out all my projects on <a class="link" href="https://github.com/betahuhn" @mouseover="$hideCursor" @mouseleave="$showCursor">GitHub</a></p>
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
            }
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