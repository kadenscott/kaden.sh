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
        background-color: var(--theme-bg-dark);
        color: var(--theme-text-light);

        min-width: 2em;
        min-height: 2em;

        padding: 0.2em;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 0.2em;

        transition: var(--transition-text)
    }

    .icon-link:hover {
        color: var(--theme-text-highlight)
    }

    .icon-link__icon {
        width: 0.5em;
        height: 0.5em;
    }

    .icon-link__text {
        font-size: 0.25em;
    }
</style>