<script>
    import {page} from "$app/stores"

    import Fa from 'svelte-fa'
    import {faDiscord, faYoutube, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
    import {faFileCode} from '@fortawesome/free-solid-svg-icons'

    import ThemeToggle from '$lib/ThemeToggle/index.svelte'
    import IconLink from '$lib/IconLink/index.svelte'

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
            <h4 class="title">[ <a href="/">home</a> <a href="/blog">blog</a> <a href="/projects">projects</a> <a
                    href="/about">about</a> ]</h4>
        </div>
    </div>
    {#if isExpanded}
        <div class="bottom" class:bottom--hidden={!isExpanded}>
            <div class="bottom-text--intro">
                <h5>Welcome to the website of</h5>
                <h2>Kaden Scott</h2>
                <h4>a <strong>software developer</strong> from Ontario, 🇨🇦</h4>
            </div>
            <ul class="social-links">
                <li><IconLink icon={faDiscord} text="My Discord server" link="https://chat.ksc.sh"/></li>
                <li><IconLink icon={faYoutube} text="YouTube" link="https://chat.ksc.sh"/></li>
                <li><IconLink icon={faTwitter} text="Twitter" link="https://chat.ksc.sh"/></li>
                <li><IconLink icon={faGithub} text="GitHub" link="https://chat.ksc.sh"/></li>
                <li><IconLink icon={faFileCode} text="kscott.dev" link="https://kscott.dev"/></li>
            </ul>
        </div>
    {/if}
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
        min-height: 5em;
        justify-content: flex-start;
        align-items: center;
        padding: 0.5em;
        transition: height 0.2s ease-in-out;
        overflow: hidden;
    }

    .top {
        justify-self: flex-start;
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 10vh;
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
        justify-self: flex-end;
        min-height: 50vh;
        width: 100%;
        transition: height 0.2s ease-in-out;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .bottom-text--intro > * {
        margin: 0;
        padding: 0;
    }

    .bottom-text--intro {
        display: flex;
        flex-direction: column;
    }

    .bottom-text--intro h5 {
        align-self: flex-start;
        font-size: 1em;
    }

    .bottom-text--intro h2 {
        transition: background 0.2s ease;
        align-self: flex-start;
        background: var(--gradient-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 4em;
    }

    .bottom-text--intro h4 {
        align-self: flex-end;
    }

    .bottom--hidden {
        max-height: 0;
    }

    .social-links {
        margin-top: 5em;
        list-style-type: none;
        padding: 0;
    }

    .social-links li {
        font-size: 3rem;
        display: inline;
    }
</style>
