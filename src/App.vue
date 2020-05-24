<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style lang="scss">

  :root{
    --font: #fff;
    --font-light: rgb(148, 148, 148);
    --background: #222;
    --background-light: #333;
    --primary: #60ddaf;
}
  html,
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: var(--background);
    color: var(--font);
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }
</style>