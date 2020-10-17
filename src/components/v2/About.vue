<template>
    <section class="about-wrapper">
        <h1>
            <span class="underline">About me</span>
        </h1>
        <div class="content">
            <p>My name is Maximilian, I am a 17 year old student and self-taught developer from Germany (🇩🇪).</p>
            <p>I spend most of my time doing Web development with Vue.js and Node.js. I'm also an avid photographer, so go check out my <a class="link" href="https://instagram.com/creerow">Instagram</a> or the <a class="link" href="/gallery">Gallery</a>. In my free time I like to go hiking in the swiss alps🏔 and watch documentaries about space🚀</p>
            <p>Most of my projects are open source and can be found on my <a class="link" href="https://github.com/BetaHuhn">GitHub</a>. I also post some of my designs on <a class="link" href="https://dribbble.com/betahuhn">Dribbble.</a></p>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>
    .about-wrapper{
        width: 85%;
        max-width: 1600px;
        margin: auto;
    }

    .content{
        max-width: 900px;
    }

</style>