<template>
    <div class="content-item">
        <h1>{{project.name}}</h1>
        <p class="content-description">{{descriptionText}}</p>
        <p class="githubStats">{{languageText}}
        <div class="content-links-wrapper">
            <div class="content-links">
                <a @mouseover="$hideCursor" @mouseleave="$showCursor" :href="project.demo" class="content-link">Live Demo</a>
                <a @mouseover="$hideCursor" @mouseleave="$showCursor" :href="`https://github.com/${project.github}`" class="content-link">GitHub</a>
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
        /* min-height: 200px; */
        position: relative;
        box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.18)
    }

    .content-item h1 {
        margin: 0;
        font-size: 27px;
    }

    .content-description{
        margin-bottom: 75px;
    }

    .content-item span {
        color: var(--font-light);
    }

    .content-links-wrapper {
        position: absolute;
        bottom: 25px;
        width: calc(100% - 40px);
    }

    .content-links {
        bottom: 0;
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
        margin-bottom: -5px;
        padding: 15px 10px;
    }

    .content-links a {
        text-decoration: none;
        color: #fff;
    }

    .icon {
        font-size: 15px;
        margin-left: 1rem;
        margin-right: 5px;
    }

    .githubStats {
        color: var(--primary);
        position: absolute;
        bottom: 50px;
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