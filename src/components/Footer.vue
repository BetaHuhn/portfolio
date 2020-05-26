<template>
  <footer>
    <div class="footer">
      <div class="bottomNav">
        <router-link @mouseover.native="$hideCursor" @mouseleave.native="$showCursor" to="/" class="nolink" >Home</router-link>
        <router-link @mouseover.native="$hideCursor" @mouseleave.native="$showCursor" to="/gallery" class="nolink" >{{content[content.current].gallery}}</router-link>
        <router-link @mouseover.native="$hideCursor" @mouseleave.native="$showCursor" :to="'/' + content[content.current].inprint.toLowerCase()" class="nolink" >{{content[content.current].inprint}}</router-link>
      </div>
      <p class="noselect">© Maximilian Schiller 2020</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    computed: {
      content: {
        get: function () {
            return this.$store.state.content;
        },
      },
    }
  }
</script>

<style scope>
  footer {
    width: 100%;
    background-color: #191c1c;
    position: absolute;
  }

  .footer {
    max-width: 90%;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    font-size: 15px;
    padding: 0px 10px;
  }

  .bottomNav {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    font-weight: 600;
    width: 90%;
    margin: auto;
  }

  .bottomNav a{
    margin: 1rem 2rem;
    font-size: 20px;
  }

  @media screen and (max-width: 750px) {
    .bottomNav a{
      margin: 0.8rem 1rem;
      font-size: 17px;
    }
  }

  .nolink{
    text-decoration: none;
    color: var(--font);
  }
</style>