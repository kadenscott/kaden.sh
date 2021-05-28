<script context="module">
    export const prerender = true;
</script>

<script>
    import Fa from "svelte-fa"
    import {faChevronRight} from "@fortawesome/free-solid-svg-icons"

    import SocialsNav from "$lib/SocialsNav/index.svelte"
</script>

<svelte:head>
    <title>$ kaden.sh</title>
</svelte:head>

<div class="index">
    <div class="index__col index__content">
        <h1>kadenscott</h1>
        <p>Software developer from Ontario, 🇨🇦</p>
        <div class="index__links">
<!--            <div class="index__link">-->
<!--                <Fa icon="{faChevronRight}"/>-->
<!--                <h3>&nbsp;<a href="/projects"> my projects</a></h3>-->
<!--            </div>-->
<!--            <div class="index__link">-->
<!--                <Fa icon="{faChevronRight}"/>-->
<!--                <h3>&nbsp;<a href="/content"> my content</a></h3>-->
<!--            </div>-->
        </div>
        <div class="index__socials">
            <SocialsNav />
        </div>
    </div>
    <div class="index__col">
        <img class="index__logo" src="/logo.svg" alt="logo"/>
    </div>
</div>

<style>
    .index {
        margin-top: 2em;
        align-self: center;
        display: flex;
        flex-direction: row;
    }

    .index__col {
        margin: 1em;
    }

    .index__links {
        margin-top: 1em;
    }

    .index__logo {
        width: 15em;
        border-radius: 1em;
    }

    .index__link {
        margin-top: 0.2em;
        margin-bottom: 0.2em;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .index__socials {
        margin-top: 2em;
    }

    @media (max-width: 800px) {
        .index {
            flex-direction: column-reverse;
            align-items: center;
        }
    }
</style>
