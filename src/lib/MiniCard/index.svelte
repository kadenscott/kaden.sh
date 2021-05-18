<script>
    export let type;
    export let name;
</script>

<style>
.card {
}
</style>

<div class="card">
    <div class="card__image">
        <h2 class="card__image__badge">{type}</h2>
        <slot name="image" />
    </div>
    <div class="card__content">
        <h1>{name}</h1>
        <slot name="content" />
    </div>
    <div class="card__button">

    </div>
</div>