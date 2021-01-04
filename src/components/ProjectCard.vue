<template>
    <div class="content-item">
        <h1>{{project.name}}</h1>
        <p>{{descriptionText}}</p>
        <div class="bottom">
            <p class="githubStats">{{languageText}}
            <div class="content-links">
                <a v-if="project.development" href="#" class="content-link development">Under development</a>
                <a v-if="!project.development" @mouseover="$hideCursor" @mouseleave="$showCursor" :href="project.demo" class="content-link">Live Demo</a>
                <a v-if="!project.development" @mouseover="$hideCursor" @mouseleave="$showCursor" :href="`https://github.com/${project.github}`" class="content-link">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ProjectCard',
        computed: {
            content: {
                get: function () {
                    return this.$store.state.content;
                }
            },
            descriptionText: {
                get: function() {
                    if(this.project.description[this.content.current].length < 1){
                        return this.content[this.content.current].loading;
                    }else{
                        return this.project.description[this.content.current];
                    }
                }
            },
            languageText: {
                get: function() {
                    if(this.project.language.length < 1){
                        return this.content[this.content.current].loading;
                    }else{
                        return this.project.language;
                    }
                }
            }
        },
        props: {
            project: {
                name: {
                    type: String
                },
                description: {
                    type: String
                },
                language: {
                    type: String
                },
                demo: {
                    type: String
                },
                github: {
                    type: String
                },
                development: {
                    type: Boolean,
                    default: false
                }
            }
        }
    }
</script>

<style scope>
    .content-item {
        background-color: var(--background-light);
        border-radius: 10px;
        padding: 20px 20px;
        width: 90%;
        position: relative;
        box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18);
        display: flex;
        flex-direction: column;
    }

    .content-item h1 {
        margin: 0;
        font-size: 27px;
    }

    .content-item span {
        color: var(--font-light);
    }

    .bottom{
        margin-top: auto;
    }

    .content-links {
        display: flex;
        justify-content: space-evenly;
        margin-left: -20px;
        margin-right: -20px;
        margin-bottom: -20px;
    }

    .content-link {
        border: 1px solid var(--background);
        width: 50%;
        text-align: center;
        margin-left: -1px;
        margin-right: -1px;
        padding: 15px 10px;
    }

    .content-links a {
        text-decoration: none;
        color: var(--font-light);
        transition: all .2s ease;
    }

    .content-links a:hover {
        color: var(--font);
    }

    .development {
        width: 100%;
    }

    .icon {
        font-size: 15px;
        margin-left: 1rem;
        margin-right: 5px;
    }

    .githubStats {
        color: var(--primary);
        margin-bottom: 0.8rem;
    }

    .githubStats svg{
        margin-bottom: 2px;
    }

    @media screen and (max-width: 750px) {
        .content-item h1 {
            font-size: 22px;
        }
        .content-item p {
            margin-top: 5px;
        }
        .githubStats{
            margin-top: 5px;
        }
    }
</style>
