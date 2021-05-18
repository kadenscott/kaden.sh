<script>
    import {page} from "$app/stores"

    import MainNav from '$lib/MainNav/index.svelte'

    let isExpanded

    page.subscribe(r => {
        isExpanded = r.path === '/'
    })
</script>

<header class="header" class:header-expanded={isExpanded}>
    <div class="header__nav">
        <h2 class="header__title">$ kaden.sh</h2>
        <MainNav class="header__nav"/>
    </div>
    <div class="header__banner">
        <h2>This site is under construction.</h2>
    </div>
</header>

<style>
    .header {
        align-self: center;
        width: 70vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 2.5em;

        background-color: var(--theme-bg-alt);
    }

    h1, h2, h3, h4, h5, h6 {
        background-color: transparent;
        color: var(--theme-text);
    }

    .header__nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        flex: 1;

        margin-inline: 0.35em;
    }

    .header__banner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        flex: 1;

        background-color: var(--colour-red-dark);
    }

    .link a {
        text-decoration: none;
        color: inherit;
    }

</style>
