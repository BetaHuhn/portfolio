<template>
    <button :title="title" class="primary-btn" @mouseover="$hideCursor" @mouseleave="$showCursor"><slot></slot></button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
        title: String
    }
  }
</script>

<style scoped>
    .primary-btn {
        appearance: none;
        border: 0;
        outline: 0;
        padding: 15px 25px;
        font-weight: 700;
        border-radius: 15px;
        border: 3px solid var(--background-dark);
        cursor: pointer;
        background: var(--background-dark);
        color: var(--font-white);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 13px;
    }

    .primary-btn:focus {
        border: 3px solid var(--primary);
        filter: brightness(105%);
    }

    .primary-btn:active {
        transform: scale(0.95);
    }
</style>