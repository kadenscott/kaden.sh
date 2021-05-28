<script>
    export let type = undefined;
    export let name = undefined;

    export let colour = undefined;

    let headerClass;
    let textClass;

    if (!colour) {
        headerClass = "";
        textClass = "";
    }

    switch (colour) {
        case "green": {
            headerClass = "gradient-green"
            textClass = "text-dark"
            break
        }
        case "blue-green": {
            headerClass = "gradient-blue-green"
            textClass = "text-dark"
            break
        }
        case "red": {
            headerClass = "gradient-red"
            textClass = "text-dark"
            break
        }
        default: {
            headerClass = ""
            textClass = ""
            break
        }
    }
</script>

<div class="card gradient-gray">
    <div class="card__header {headerClass}">
        <h2 class="card__header__title {textClass}">{name}</h2>
        <h5 class="card__header__badge">{type}</h5>
        <slot name="image"/>
    </div>
    <div class="card__content">
        <div class="card__content__slot">
            <slot name="content"/>
        </div>
        <a class="card__button">
            <h2 class="card_button_link">Visit</h2>
        </a>
    </div>
</div>

<style>
    .card {
        background-color: var(--theme-colour-bg-darker);
        width: 100%;
        margin-top: 1em;
        margin-bottom: 1em;
        border-radius: 0.45em;
        box-shadow: 0 0 10px var(--theme-colour-bg-darkest);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card__header {
        border-top-left-radius: 0.45em;
        border-top-right-radius: 0.45em;

        background-color: black;

        display: flex;
        padding-top: 0.25em;
        padding-bottom: 0.25em;
        flex-direction: row;

        justify-content: space-between;

        width: 100%;
    }

    .card__header__title {
        background-color: transparent;
        justify-self: flex-start;
        align-self: center;
    }

    .card__header__badge {
        right: 0;
        margin-right: 0.4em;
        position: absolute;
        height: min-content;
        width: min-content;

        border-top-left-radius: 0;
        border-top-right-radius: 0;

        justify-self: flex-end;
    }

    .card__content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .card__content__slot {
    }

    .card__button {
        justify-self: flex-end;
        width: 10em;
        height: 100%;
        margin: 0.25em;
        border: var(--border);
        background-color: hsla(0, 0%, 100%, 0.02);
        border-radius: 0.5em;
        text-align: center;
        cursor: pointer;
        transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card__button:hover {
        transform: scale(1.02);
    }

    .card__button:active {
        background-color: hsla(0, 0%, 0%, 0.05);
    }

    .card_button_link {
        color: var(--theme-colour-text-dark);
        background-color: inherit;
        user-select: none;
    }

</style>
