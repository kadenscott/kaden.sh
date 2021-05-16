<script>
    import Fa from 'svelte-fa'

    export let icon;
    export let link;
    export let text;
</script>

<a class="icon-link" href="{link}">
    <Fa class="icon-link__icon" icon={icon} />
    <p class="icon-link__text">{text}</p>
</a>

<style>
    .icon-link {
        background-color: #1a1a1a;
        color: #9c9c9c;
        min-width: 2em;
        min-height: 2em;
        padding: 0.2em;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .icon-link__icon {
        width: 0.5em;
        height: 0.5em;
    }

    .icon-link__text {
        font-size: 0.25em;
    }
</style>