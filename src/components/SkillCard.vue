<template>
    <div class="skill-item">
        <div class="skill-wrapper">
            <p><font-awesome-icon :icon="skill.icon" size="lg" class="skillIcon" :style="{color: skill.color}" /> {{skill.name}}</p>
        </div>
        <p class="skillDesc">{{skill.description}}</p>
    </div>
</template>

<script>

    export default {
        name: 'SkillCard',
        props: {
            skill: {
                name: {
                    type: String
                },
                description: {
                    type: String
                },
                icon: {
                    type: Array
                },
                color: {
                    type: String
                }
            }
        }
    }
</script>

<style scope>
    .skill-item {
        background-color: var(--background-light);
        border-radius: 10px;
        padding: 10px 20px;
        width: 90%;
        position: relative;
        box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18)
    }
    .skill-wrapper {
        display: flex;
        flex-direction: row;
    }

    .skillIcon {
        font-size: 25px;
        margin-right: 5px;
    }

    .skillDesc{
        color: var(--font-light);
        margin-top: 0px;
    }
</style>