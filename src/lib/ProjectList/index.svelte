<script>
    // Project loading is in index.svelte route, as regular components cannot have a context="module" script tag.

    import ProjectCard from '$lib/ProjectCard/index.svelte'
    export let projects = [];
</script>

<h1>Projects</h1>
<div class="projects">
    {#each projects as project (project.name)}
            <ProjectCard
                    name="{project.name}"
                    description="{project.description}"
                    hasLink="{project.hasLink}"
                    link="{project.link}"
                    linkText="{project.linkText}"
            />
    {/each}
</div>


<style>
    .projects {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>