<script>
    import Header from '$lib/Header/index.svelte';
    import '../app.css';
</script>

<main class="page-container">
    <slot/>
</main>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: var(--theme-colour-bg);

        min-height: 100vh;
        width: 100%;
    }
</style>
