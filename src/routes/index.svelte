<script context="module">
    import ProjectCard from "$lib/ProjectCard/index.svelte";

    export async function load({fetch}) {
        let project = null

        const res = await fetch('/api/projects.json')

        if (res.ok) {
            let projects = await res.json();

            project = projects[Math.floor(Math.random() * projects.length)]
        }

        return {
            props: {project: project}
        }
    }
</script>

<script>
    export let project
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

    .inline-nav {
        width: 20vw;
        align-self: center;
    }
</style>