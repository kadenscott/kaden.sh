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
</style>
