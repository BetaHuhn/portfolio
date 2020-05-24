<template>
    <div class="console">
        <p><span class="green">{{hostname}}</span>:<span class="blue">~{{path}}</span>$</p>
        <p v-if="!isFinished" id="text" class="command">{{currentText}}</p>
        <a v-else href="mailto:schiller@mxis.ch" class="command">{{currentText}}</a>
    </div>
</template>

<script>
    export default {
        name: 'Console',
        data: function () {
            return {
                currentIndex: 0,
                currentText: "",
                isFinished: false,
            }
        },
        props: {
            hostname: {
                type: String
            },
            path: {
                type: String
            },
            messages: {
                type: Array
            },
            endText: {
                type: String
            }
        },
        methods: {
            runAnimation: async function () {
                await this.timer(1000);
                this.currentText = "";
                this.isFinished = false;
                for (let i in this.messages) {
                    this.currentIndex = i;
                    await this.typeText(this.messages[this.currentIndex]);
                    await this.timer(800);
                    await this.removeText();
                }
                this.isFinished = true;
                this.typeText(this.endText);
            },
            removeText: function () {
                return new Promise((resolve) => {
                    document.getElementById("text").classList.add("selected");
                    setTimeout(() => {
                        document.getElementById("text").classList.remove("selected");
                        this.currentText = "";
                        resolve();
                    }, 200);
                })
            },
            timer: function (ms) {
                return new Promise(res => setTimeout(res, ms));
            },
            typeText: function (text) {
                return new Promise((resolve) => {
                    for (let i = 0; i < text.length; i++) {
                        setTimeout(() => {
                            this.currentText += text[i];
                        }, 50 * i);
                    }
                    setTimeout(() => {
                        resolve();
                    }, 100 * text.length);
                })
            }
        },
        mounted() {
            this.runAnimation();
        }
    }
</script>

<style scope>
    .console {
        background: var(--background-light);
        padding: 2px 10px;
        color: var(--font);
        display: flex;
        width: 750px;
        margin-top: 2rem;
        border-right: 3px solid var(--primary);
    }

    .selected {
        background: var(--font);
        color: #000 !important;
    }

    .command {
        margin-left: 0.5rem;
        text-decoration: none;
        color: var(--font);
        margin-top: 16px;
    }

    .command::after {
        content: "";
        display: inline-block;
        background-color: var(--font);
        vertical-align: top;
        width: 10px;
        height: 2px;
        margin-top: 15px;
        margin-left: 1px;
        -webkit-animation: blink 1s step-end infinite;
        animation: blink 1s step-end infinite;
    }

    @-webkit-keyframes blink {
        0% {
            opacity: 1.0;
        }

        50% {
            opacity: 0.0;
        }

        100% {
            opacity: 1.0;
        }
    }

    @keyframes blink {
        0% {
            opacity: 1.0;
        }

        50% {
            opacity: 0.0;
        }

        100% {
            opacity: 1.0;
        }
    }

    .green {
        color: var(--primary)/* #2ccf13*/;
    }

    .blue {
        color: #468dd9;
    }
</style>