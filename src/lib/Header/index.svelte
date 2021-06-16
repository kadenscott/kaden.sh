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

<div class="header__wrapper">
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
                <img class="header__logo" src="https://kaden.sh/logo.svg"
                     alt="The logo of my website.">
            </div>
        </div>
    </header>
</div>

<style>
    .header__wrapper {
        min-height: 10em;
        display: flex;
    }

    .header {
        margin-top: 1em;
        margin-bottom: 1em;
        max-width: 40vw;
        width: 40vw;
        height: 100%;
        display: flex;
    }

    .header__left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 2;
        margin-right: 1em;
    }

    .header__right {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex: 1;
        margin-left: 1em;
    }

    .header__logo__wrapper {
        display: flex;
        justify-content: center;
        flex-grow: 1;
    }

    .header__logo {
    }

    .header__nav {
        padding-top: 0.5em;
    }

    .header__nav__ul {
        list-style-type: none;
        display: flex;
        padding: 0;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .header__nav__li {
        margin-top: 1.5em;
    }


    .header__nav__li a {
        background-color: black;
        padding: 0.35em 1em;
        color: white;
        border-radius: 0.25em;
        font-size: 1.25rem;
    }

    /*.header {*/
    /*    padding-top: 1em;*/
    /*    width: 100%;*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    flex-direction: row;*/
    /*}*/

    /*.header__top {*/
    /*    width: 50vw;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    justify-content: space-between;*/
    /*    flex-direction: row;*/
    /*}*/

    /*.header__right {*/
    /*    width: fit-content;*/
    /*    border-radius: 0.4em;*/
    /*}*/

    /*.header__right--small {*/
    /*    width: 3em;*/
    /*}*/


    /*.header__left {*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    justify-content: space-between;*/
    /*    flex: 1;*/
    /*    padding-right: 3em;*/
    /*}*/

    /*.header__title {*/
    /*    margin: 0;*/
    /*    font-size: 2.5rem;*/
    /*}*/
</style>