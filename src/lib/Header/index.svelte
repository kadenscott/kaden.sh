<script>
    import {page} from "$app/stores"

    import MainNav from '$lib/MainNav/index.svelte'
    import IconLink from '$lib/IconLink/index.svelte'

    let isExpanded

    page.subscribe(r => {
        isExpanded = r.path === '/'
    })
</script>

<header class="header" class:header-expanded={isExpanded}>
    <h1>kaden.sh</h1>
    <MainNav />
</header>

<style>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        min-width: 80vw;
        background-color: gray;
    }
</style>
