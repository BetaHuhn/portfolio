<template>
    <div class="loading-wrapper">
        <div id="loader" class="loader">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Loader',
        props:{
            message: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .loader {
        display: inline-block;
        position: absolute;
        top: 45%;
        transform: translateY(-50%);
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 80px;
    }

    .loader div {
        display: inline-block;
        position: absolute;
        z-index: 999;
        width: 16px;
        background: var(--primary);
        animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }

    .loading-wrapper p {
        display: block;
        position: absolute;
        z-index: 999;
        color: var(--font-white);
        top: calc(45% + 65px);
        transform: translateY(-50%);
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
    }

    .loader div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }

    .loader div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }

    .loader div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }

    @keyframes loader {
        0% {
            top: 8px;
            height: 64px;
        }

        50%,
        100% {
            top: 24px;
            height: 32px;
        }
    }
</style>