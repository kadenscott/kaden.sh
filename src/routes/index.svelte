<script context="module">
    export const prerender = true;

    import ProjectCard from "$lib/ProjectCard/index.svelte";
    import PageNav from "$lib/PageNav/index.svelte";

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
    export let projects = [];

    let project = projects[Math.floor(Math.random() * projects.length)]
</script>

<svelte:head>
    <title>kaden.sh</title>
</svelte:head>

<div class="page">
    <p>Hi, welcome to my website. This place hosts all sorts of stuff. Click around to explore.</p>

    <ProjectCard
            name="{project.name}"
            description="{project.description}"
            hasLink="{project.hasLink}"
            link="{project.link}"
            linkText="{project.linkText}"
    />
</div>


<style>
    .page {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .inline-nav {
        width: 20vw;
        align-self: center;
    }
</style>