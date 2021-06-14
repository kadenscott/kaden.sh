<script>
    import ProjectCard from '$lib/ProjectCard/index.svelte'
    export let projects = [];
</script>

<div class="projects__container">
    <div class="projects__title">
        <h1 class="projects__title__text">Projects</h1>
<!--        <form class="projects__search">-->
<!--            <input type="text" class="projects__search__input">-->
<!--            <input type="submit" value="Search">-->
<!--        </form>-->
    </div>
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
</div>

<style>
    .projects {
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .projects__title {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .projects__search {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .projects__search__input {
        font-size: 1.25rem;
    }
</style>