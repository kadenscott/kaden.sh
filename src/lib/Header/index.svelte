<script>
    import {page} from "$app/stores"

    import MainNav from '$lib/MainNav/index.svelte'
    import IconLink from '$lib/IconLink/index.svelte'

    let isExpanded

    page.subscribe(r => {
        isExpanded = r.path === '/'
    })
</script>

<header class="header" class:header-expanded={isExpanded}>
    <div class="header__title">
        <h1>kaden.sh</h1>
    </div>
    <div class="header__nav">
        <MainNav />
    </div>
</header>

<style>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-width: 80vw;
        background-color: var(--theme-colour-bg-darkest);
        padding-top: 1em;
        padding-bottom: 1em;

    }

    .header__nav {
        display: flex;
        justify-content: flex-end;
    }

    .header__title {
        display: flex;
        justify-content: flex-start;
    }

    .header__nav, .header__title {
        flex: 1;
        margin-inline: 1em;
    }

    @media (max-width: 900px) {
        .header {
            width: 100vw;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>
