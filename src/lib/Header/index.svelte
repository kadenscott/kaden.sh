<script>
    import {page} from "$app/stores"

    import MainNav from '$lib/MainNav/index.svelte'
    import SocialsNav from '$lib/SocialsNav/index.svelte'

    let isExpanded

    page.subscribe(r => {
        isExpanded = r.path === '/'
    })
</script>

<header class="header" class:header-expanded={isExpanded}>
    <div class="header__bar header__bar__title">
        <div class="header__title">
            <h1>kaden.sh</h1>
        </div>
        <div class="header__nav">
            <SocialsNav />
        </div>
    </div>
    <div class="header__bar header__bar__nav gradient-gray">
        <div class="header__nav">
            <MainNav />
        </div>
    </div>
</header>

<style>
    .header {
        font-size: 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: var(--theme-colour-bg-darker);
    }

    .header__bar {
        display: flex;
        width: 100%;
        flex-direction: row;
    }

    .header__bar__nav .header__nav {
        justify-content: center;
    }

    .header__nav {
        display: flex;
        justify-content: flex-end;
    }

    .header__title {
        display: flex;
        justify-content: flex-start;
    }

    .header__title > h1 {
        font-size: 1.5rem;
        background-color: inherit;
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
