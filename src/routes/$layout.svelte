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
    }
</style>
