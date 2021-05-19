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
</header>

<style>
</style>
