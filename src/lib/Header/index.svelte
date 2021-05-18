<script>
    import {page} from "$app/stores"

    import Splash from '$lib/Splash/index.svelte'
    import ThemeToggle from '$lib/ThemeToggle/index.svelte'
    import MainNav from '$lib/MainNav/index.svelte'

    let isExpanded

    page.subscribe(r => {
        isExpanded = r.path === '/'
    })
</script>

<header class="header" class:header-expanded={isExpanded}>
    <h2 class="header__title">$ kaden.sh</h2>
    <nav class="header__nav">
        <h3 class="link"><a href="/">~/</a></h3>
        <h3 class="link"><a href="/projects">~/projects</a></h3>
        <h3 class="link"><a href="/blog">~/blog</a></h3>
        <h3 class="link"><a href="/about">~/about</a></h3>
    </nav>
</header>

<style>
    .header {
        margin-top: 1em;
        align-self: center;
        width: 70vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2.5em;
    }

    .link a {
        text-decoration: none;
        color: inherit;
    }

    .link--current {
        transform: scale(1.1);
    }

    .header__nav {
        display: flex;
        flex-direction: row;

    }
</style>
