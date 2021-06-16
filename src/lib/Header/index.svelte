<script>
    import {page} from "$app/stores"

    import Fa from 'svelte-fa'
    import {faGithub, faTwitter, faYoutube, faDiscord} from '@fortawesome/free-brands-svg-icons'
    import {faMusic} from '@fortawesome/free-solid-svg-icons'

    /**
     * If true, the header will be expanded. If false, it will be smaller.
     * @type {boolean}
     */
    $: expanded = $page.path === "/";
</script>

<!--<header class="header">-->
<!--    <div class="header__top">-->
<!--        <div class="header__left">-->
<!--            <h1 class="header__title font-mono">kaden.sh</h1>-->
<!--            {#if expanded}-->
<!--                <p class="header__subtext">the site of <strong>kadenscott</strong>, aka <strong>bluely</strong>.</p>-->
<!--                <nav class="header__nav">-->
<!--                    <ul class="header__nav__ul">-->
<!--                        <li class="header__nav__li"><a href="https://github.com/kadenscott">-->
<!--                            <Fa icon={faGithub}/>-->
<!--                        </a></li>-->
<!--                        <li class="header__nav__li"><a href="https://twitter.com/kscottdev">-->
<!--                            <Fa icon={faTwitter}/>-->
<!--                        </a></li>-->
<!--                        <li class="header__nav__li"><a href="https://www.youtube.com/channel/UCee8ekNyhwgU8SQM2liuibQ">-->
<!--                            <Fa icon={faYoutube}/>-->
<!--                        </a></li>-->
<!--                        <li class="header__nav__li"><a href="https://chat.ksc.sh">-->
<!--                            <Fa icon={faDiscord}/>-->
<!--                        </a></li>-->
<!--                        <li class="header__nav__li"><a href="https://lawks.bandcamp.com">-->
<!--                            <Fa icon={faMusic}/>-->
<!--                        </a></li>-->
<!--                    </ul>-->
<!--                </nav>-->
<!--            {/if}-->
<!--        </div>-->
<!--        <img class="header__right" class:header__right&#45;&#45;small={!expanded} src="/logo.svg" alt="The logo of my website.">-->
<!--    </div>-->
<!--</header>-->

<header class="header">
    <div class="header__left">
        <div class="header__text">
            <h1 class="header__title font-mono">kaden.sh</h1>
            {#if expanded}
                <p class="header__subtext">the site of <strong>kadenscott</strong>, aka
                    <strong>bluely</strong>.</p>
            {/if}
        </div>
        {#if expanded}
            <nav class="header__nav">
                <ul class="header__nav__ul">
                    <li class="header__nav__li"><a href="https://github.com/kadenscott">
                        <Fa icon={faGithub}/>
                    </a></li>
                    <li class="header__nav__li"><a href="https://twitter.com/kscottdev">
                        <Fa icon={faTwitter}/>
                    </a></li>
                    <li class="header__nav__li"><a
                            href="https://www.youtube.com/channel/UCee8ekNyhwgU8SQM2liuibQ">
                        <Fa icon={faYoutube}/>
                    </a></li>
                    <li class="header__nav__li"><a href="https://chat.ksc.sh">
                        <Fa icon={faDiscord}/>
                    </a></li>
                    <li class="header__nav__li"><a href="https://lawks.bandcamp.com">
                        <Fa icon={faMusic}/>
                    </a></li>
                </ul>
            </nav>
        {/if}
    </div>
    <div class="header__right">
        <div class="header__logo__wrapper">
            <img class="header__logo" class:header__logo--small={!expanded} src="https://kaden.sh/logo.svg"
                 alt="The logo of my website.">
        </div>
    </div>
</header>

<style>
    .header {
        padding: 1em;
        width: 100%;
        display: flex;
        align-content: center;
    }

    .header__left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 3;
        margin-right: 1em;
    }

    .header__right {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex: 2;
        margin-left: 1em;
    }

    .header__logo__wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }

    .header__nav {
        padding-top: 0.5em;
    }

    .header__nav__ul {
        list-style-type: none;
        display: flex;
        padding: 0;
        width: 100%;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .header__nav__li {
        margin: 1em;
    }


    .header__nav__li a {
        background-color: black;
        padding: 0.35em 1em;
        color: white;
        border-radius: 0.25em;
        font-size: 1.25rem;
        width: 3em;
    }

    @media screen and (max-width: 640px) {
        .header {
            flex-direction: column-reverse;
        }

        .header__logo {
            max-width: 10em;
        }

        .header__left, .header__right {
            margin-inline: 0;
        }

        .header__nav__ul {
            justify-content: center;
        }
    }
</style>