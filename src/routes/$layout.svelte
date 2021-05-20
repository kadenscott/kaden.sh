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

        background-color: var(--theme-colour-bg-dark);

        min-height: 100vh;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 5em;
        width: 60vw;
    }
</style>
