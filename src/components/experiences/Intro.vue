<template>
    <section class="intro">
        <div class="title">
            <h1>{{title}}</h1>
            <h2>{{displayDate(from)}} - {{displayDate(to)}}</h2>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'Intro',
        props: {
            title: String,
            from: Number,
            to: Number
        },
        methods: {
            displayDate(value) {
                let date = new Date(value);
                return date.toLocaleDateString()
            }
        }
    }
</script>

<style scoped>
    .intro{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        max-width: 1200px;
        margin: auto;
        margin-top: 8rem;
    }

    .title h1{
        text-transform: uppercase;
        font-size: 3rem;
        margin: 0;
    }

    .title h2{
        color: var(--font-light);
        font-size: 1.2rem;
        margin: 0;
    }

    .content{
        max-width: 50%;
    }

    .content button{
        background: var(--font);
        color: var(--background);
        font-size: 1.1rem;
        margin-top: 2rem;
    }
</style>