<script>
    $: text = "🌞"

    function toggle() {
        let present = window.document.documentElement.classList.toggle("light-mode")

        text = present ? "🌞" : "🌝"
    }
</script>

<button on:click={toggle}>
    {text}
</button>

<style>
    button {
        background-color: var(--colour-bg-2);
        color: white;
        border-radius: 4px;
        border: gray 1px solid;
        font-size: 2em;
    }
</style>