<script>
    import Fa from "svelte-fa";
    import { faLink } from '@fortawesome/free-solid-svg-icons'

    /**
     * The name of this project.
     * @type {string}
     */
    export let name = "";

    /**
     * The description of this project.
     * @type {string}
     */
    export let description = "";

    /**
     * Does this project have an associated link? If true, the link will be present with the value of `link`.
     * @type {boolean}
     */
    export let hasLink = false;

    /**
     * The link to this project.
     * @type {string}
     */
    export let link = "";

    /**
     * The text of the link button.
     * @type {string}
     */
    export let linkText = "";
</script>

<div class="project">
    <h1 class="project__name">{name}</h1>
    <p class="project__description">{description}</p>
    {#if hasLink}
        <a class="project__link__button" href="{link}"><h3 class="project__link__button__text"><Fa icon="{faLink}"/>&nbsp;&nbsp;{linkText}</h3></a>
    {/if}
</div>

<style>
    .project {
        border: 2px solid;
        padding: 0.3em;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .project__name {
        margin: 0;
    }

    .project__description {
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .project__link__button {
        text-align: center;
        width: 100%;
        text-decoration: none;
    }

    .project__link__button__text {
        padding: 0.5em;
        margin: 0;
        background-color: black;
        color: white;
    }
</style>