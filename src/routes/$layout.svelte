<script>
    import Header from '$lib/Header/index.svelte';
    import '../app.css';
</script>

<div class="page-container">
    <Header />

    <main>
        <slot/>
    </main>
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        min-width: 100vw;
        min-height: 100vh;

        background-color: var(--theme-bg);
        color: var(--theme-text);
    }

    main {
        width: 60vw;
    }
</style>
