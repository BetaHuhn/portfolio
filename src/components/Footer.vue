<template>
  <footer>
    <div class="footer">
      <p class="noselect">© Maximilian Schiller 2020</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style scope>
  footer {
    width: 100%;
    background-color: #191c1c;
    position: absolute;
  }

  .footer {
    max-width: 400px;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    font-size: 15px;
    padding: 0px 10px;
  }

  .nav {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    font-weight: 600;
  }

  .nav li {
    margin: 1rem;
  }
</style>