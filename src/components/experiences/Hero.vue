<template>
    <div class="hero" :style="{ '--hero-image': `url(${image})`  }">
        <div class="hero-text" :style="{ '--text-to-bottom': `${textToBottom}rem`}">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
        </div>
        <div id="fade"></div>
    </div>
</template>

<script>
  export default {
    name: 'Hero',
    data () {
        return {
            textToBottom: 9
        }
    },
    props: {
        title: String,
        subtitle: String,
        image: String
    },
    methods: {
      handleScroll: function () {
        let toTop = window.scrollY;
        let newValue =  toTop / 20 + 9;
        this.textToBottom = newValue < 100 ? newValue : 100;
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style scoped>
    .hero{
        width: 100%;
        height: 100vh;
        background: var(--hero-image);
        background-position: center center;
        background-size: cover;
        position: relative;
    }

    .hero-text{
        position: absolute;
        z-index: 1;
        bottom: var(--text-to-bottom);
        right: 7rem;
    }

    .hero-text h1{
        font-size: 7rem;
        margin: 0;
        text-transform: uppercase;
    }

    .hero-text h2 {
        color: var(--primary);
        font-size: 1.7rem;
        margin: 0;
        margin-left: 10px;
        margin-top: -10px
    }

    #fade{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 15vh;
        background: linear-gradient(to bottom,  rgba(0, 0, 0, 0), var(--background))
    }
</style>