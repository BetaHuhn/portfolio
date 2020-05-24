<template>
    <div class="content-item">
        <h1>{{project.name}}</h1>
        <p>{{descriptionText}}</p>
        <p class="githubStats">{{languageText}}
            <font-awesome-icon icon="star" size="lg" class="icon" />{{stars}}</p>
        <!-- <span>{{updatedAt}}</span> -->
        <div class="content-links-wrapper">
            <div class="content-links">
                <a :href="project.demo" class="content-link">Live Demo</a>
                <a :href="`https://github.com/${project.github}`" class="content-link">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
    const humanizeDuration = require('humanize-duration')

    export default {
        name: 'ProjectCard',
        data: function () {
            return {
                stars: 0,
                language: "",
                description: ""
            }
        },
        computed: {
            content: {
                get: function () {
                    return this.$store.state.content;
                }
            },
            descriptionText: {
                get: function() {
                    if(this.description.length < 1){
                        return this.content[this.content.current].loading;
                    }else{
                        return this.description;
                    }
                }
            },
            languageText: {
                get: function() {
                    if(this.language.length < 1){
                        return this.content[this.content.current].loading;
                    }else{
                        return this.language;
                    }
                }
            }
        },
        props: {
            project: {
                name: {
                    type: String
                },
                demo: {
                    type: String
                },
                github: {
                    type: String
                },
            }
        },
        methods: {
            queryGithub: async function () {
                //return null
                fetch(`https://api.github.com/repos/${this.project.github}`)
                    .then(async response => {
                        const data = await response.json();
                        if (!response.ok) {
                            const error = (data && data.message) || response.status;
                            this.description = error;
                            return Promise.reject(error);
                        }
                        console.log(data)
                        this.stars = data.stargazers_count;
                        this.language = (data.language != null) ? data.language : this.content[this.content.current].loadingError;
                        this.description = (data.description != null) ? data.description : this.content[this.content.current].loadingError;
                        let now = new Date();
                        let before = new Date(data.updated_at);
                        let diff = now - before;
                        this.updatedAt = "updated " + humanizeDuration(diff, { round: true, largest: 1 }) + " ago";
                    })
                    .catch(error => {
                        this.description = this.content[this.content.current].loadingError;
                        console.error('There was an error!', error);
                    });
            }
        },
        mounted() {
            this.queryGithub();
        }
    }
</script>

<style scope>
    .content-item {
        background-color: var(--background-light);
        border-radius: 10px;
        padding: 20px 20px;
        width: 100%;
        min-height: 200px;
        position: relative;
    }

    .content-item h1 {
        margin: 0;
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
</style>