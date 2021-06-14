<script>
    import Header from '$lib/Header/index.svelte'

    import {page} from '$app/stores'
    import '../app.css';

    console.log($page);
</script>

<div class="layout">
    <div class="layout__content">
        <Header/>

        <div class="spacer">
            <hr>
        </div>

        <main>
            <slot/>
        </main>

        <div class="spacer">
            <hr>
        </div>

        <footer>
            <p>with 😡 and ☕ from 🇨🇦 </p>
        </footer>
    </div>
</div>

<style>
    .layout__content {
        width: 66ch;
        display: flex;
        flex-direction: column;
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
