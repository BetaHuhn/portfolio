<template>
    <section class="skills-wrapper">
        <h1>
            <span class="underline">{{content[content.current].skills}}</span>
        </h1>
        <div class="skill-grid">
            <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
        </div>
        
    </section>
</template>

<script>
    import SkillCard from '@/components/SkillCard'

    export default {
        name: 'Skills',
        components: {
            SkillCard
        },
        computed: {
            skills: function () {
                return this.$store.state.skills;
            },
            content: function () {
                return this.$store.state.content;
            }
        }
    }
</script>

<style scoped>
    .skills-wrapper{
        width: 80%;
        max-width: 1400px;
        margin: auto;
        margin-bottom: 7rem;
    }

    .skills-wrapper h1{
        margin-bottom: 4rem;
        text-align: center;
    }

    .skill-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, max(300px));
        justify-content: center;
        column-gap: 1.5rem;
        row-gap: 1rem;
        justify-items: center;
        max-width: 1000px;
        margin: auto;
    }
</style>