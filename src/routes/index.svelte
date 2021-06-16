<script context="module">
    export let hydrate = false

    import ProjectCard from "$lib/ProjectCard/index.svelte";

    export async function load({fetch}) {
        let projectIndex = 0
        let projects = []

        const res = await fetch('/api/projects.json')

        if (res.ok) {
            projects = await res.json();

            projectIndex = Math.floor(Math.random() * projects.length)
        }

        return {
            props: {projects, projectIndex}
        }
    }
</script>

<script>
    export let projects
    export let projectIndex

    export let project = projects[projectIndex]

    console.log(projectIndex)
</script>

<svelte:head>
    <title>kaden.sh</title>
</svelte:head>

<div class="page">
    <p>Hi, welcome to my website. This place hosts all sorts of stuff. Click around to explore.</p>

    <ProjectCard
            name={project.name}
            description="{project.description}"
            hasLink="{project.hasLink}"
            link="{project.link}"
            linkText="{project.linkText}"
    />
</div>


<style>
    .page {
        display: flex;
        flex-direction: column;
    }
</style>