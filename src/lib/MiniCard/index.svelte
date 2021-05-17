<script>
    export let type;
    export let name;
</script>

<style>
.card {
    background-color: white;
    border-radius: 0.25em;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
</style>

<div class="card">
    <div class="card__image">
        <slot name="image" />
    </div>
    <div class="card__content">
        <h1>{name}</h1>
        <slot name="content" />
    </div>
    <div class="card__button">

    </div>
</div>