<script>
    import Header from '$lib/Header/index.svelte';
    import '../app.css';
</script>

<main>
    <slot/>
</main>

<style>
    main {
        width: 100vw;
        background-color: var(--theme-bg);
        height: 100vh;
    }
</style>
