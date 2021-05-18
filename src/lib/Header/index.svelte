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
        <div class="header__title">
            <h2>$&nbsp;kaden.sh</h2>
        </div>
        <MainNav class="header__nav"/>
    </div>
    <div class="header__banner gradient-red-orange-dark">
        <h4>⚠️ This site is under construction. ⚠️</h4>
    </div>
</header>

<style>

    .header {
        min-width: 60vw;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-self: center;

        margin-bottom: 2.5em;

        border-bottom-right-radius: 0.2em;
        border-bottom-left-radius: 0.2em;

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

        border-bottom-right-radius: 0.2em;
        border-bottom-left-radius: 0.2em;

        flex: 1;
    }

    .link a {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 769px) {
        .header {
            width: 100vw;
        }

        .header__nav {
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
        }

        .header__title {
        }

    }


</style>
