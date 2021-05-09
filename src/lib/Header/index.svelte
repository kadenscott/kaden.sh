<script>
    import ThemeToggle from '$lib/ThemeToggle/index.svelte'
    import { page } from "$app/stores"

    let isExpanded

    page.subscribe(r => {
        isExpanded = r.path === '/'
    })
</script>

<header class="header" class:header--enlarged={isExpanded}>
    <div class="top">
        <div class="row--1">
            <div class="row-child--left corner-left">

            </div>
            <div class="row-child--mid title">
                <h1>$ kaden.sh</h1>
            </div>
            <div class="row-child--right corner-right">
                <ThemeToggle/>
            </div>
        </div>
        <div class="row--2">
            <h4 class="title">[ <a href="/">home</a> <a href="/blog">blog</a> <a href="/projects">projects</a> <a href="/about">about ]</a></h4>
        </div>
    </div>
    <div class="bottom" class:bottom--hidden={!isExpanded}>
        <h1>kaden.sh</h1>
    </div>
</header>

<style>
    .title {
        font-family: var(--font-mono);
        margin: 0;
        padding: 0.1em 0.2em;
        border-radius: 0.3em;
        background-color: black;
        color: #a8a8a8;
    }

    .title h1 {
        padding: 0;
        margin: 0;
        height: fit-content;
    }

    .header {
        background-color: var(--colour-bg-2);
        display: flex;
        flex-direction: column;
        height: 5em;
        justify-content: flex-start;
        align-items: center;
        padding: 0.5em;
        transition: height 0.2s ease-in-out;
        overflow: hidden;
    }

    .header--enlarged {
        height: 80vh;
    }

    .top {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 10vh;
    }

    .top .row--1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .top .row--2 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .row-child--left, .row-child--mid, .row-child--right {
        display: flex;
        flex-direction: row;
        flex: 1;
    }

    .row-child--left {
        justify-content: flex-start;
    }

    .row-child--mid {
        justify-content: center;
        flex: none;
    }

    .row-child--right {
        justify-content: flex-end;
    }

    .bottom {
        height: 70vh;
        width: 100%;
        background-color: black;
        transition: height 0.2s ease-in-out;
        overflow: hidden;
    }

    .bottom--hidden {
        height: 0;
    }
</style>
