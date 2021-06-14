<script>
    import Header from '$lib/Header/index.svelte'
    import Footer from '$lib/Footer/index.svelte'

    import {page} from '$app/stores'
    import '../app.css';
</script>

<div class="layout">
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
    }

    .layout__content__main {
        flex: 1;
    }

    .layout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100vh;
    }

    .spacer {
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .spacer hr {
        flex-grow: 1;
    }
</style>
