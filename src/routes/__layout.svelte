<script>
    import Header from '$lib/Header/index.svelte'
    import Footer from '$lib/Footer/index.svelte'
    import TopNav from '$lib/TopNav/index.svelte'

    import '../app.css';
</script>

<div class="layout">
    <TopNav />
    <div class="layout__content">
        <Header/>

        <div class="spacer">
            <hr>
        </div>

        <main class="layout__content__main">
            <slot/>
        </main>

        <div class="spacer">
            <hr>
        </div>

        <Footer />
    </div>
</div>

<style>
    .layout__content {
        max-width: 66ch;
        display: flex;
        flex-direction: column;
        padding: 1em;
        flex-grow: 1;
    }

    .layout__content__main {
        flex: 1;
    }

    .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        padding: 0.1em;
    }

    .spacer hr {
        flex-grow: 1;
    }
</style>
