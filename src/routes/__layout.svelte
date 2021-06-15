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
        width: 66ch;
        display: flex;
        flex-direction: column;
        padding: 1em;
        flex: 1;
    }

    .layout__content__main {
        flex: 1;
    }

    .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100%;
        padding: 0.1em;
    }

    .spacer hr {
        flex-grow: 1;
    }

    @media only screen and (max-width: 600px) {
        .layout__content {
            width: 100%;
        }
    }
</style>
