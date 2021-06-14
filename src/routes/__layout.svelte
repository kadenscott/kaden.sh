<script>
    import Header from '$lib/Header/index.svelte'

    import {page} from '$app/stores'
    import '../app.css';

    console.log($page);
</script>

<div class="layout">
    <div class="layout__content">
        <Header/>

        <hr>

        <main>
            <slot/>
        </main>

        <footer>
        </footer>
    </div>
</div>

<style>
    .layout__content {
        width: 66ch;
    }

    .layout {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
