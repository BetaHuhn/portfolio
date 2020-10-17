<template>
    <section class="projects-wrapper">
        <h1>
            <span class="underline">Recent Projects</span>
        </h1>
        <div class="list">
            <ProjectItem v-for="project in projects" :key="project.name" :project="project" />
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

    .list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

</style>