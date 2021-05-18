<script>
    import Header from '$lib/Header/index.svelte';
    import '../app.css';
</script>

<div class="page-container">
    <Header/>

    <main>
        <slot/>
    </main>
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        min-width: 100vw;
        min-height: 100vh;

        color: var(--theme-text);
        background-color: var(--theme-bg);
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 60vw;
    }

    @media (max-width: 769px) {
        main {
            max-width: 100vw;
        }
    }
</style>
