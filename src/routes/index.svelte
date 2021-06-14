<script context="module">
    import ProjectList from "$lib/ProjectList/index.svelte";

    export const prerender = true;

    export const load = async ({fetch}) => {
        const res = await fetch('/api/projects.json')

        if (res.ok) {
            let projects = await res.json();

            return {
                props: {projects}
            }
        } else {
            return {
                props: {projects: []}
            }
        }
    }
</script>

<script>
    export let projects;
</script>

<svelte:head>
    <title>kaden.sh</title>
</svelte:head>

<ProjectList projects={projects}/>
