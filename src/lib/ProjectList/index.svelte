<script>
    import ProjectCard from "$lib/ProjectCard/index.svelte";
</script>

<h1>Projects</h1>
<div class="projects">
    <ProjectCard
            name="mc.ksc.sh"
            description="My Minecraft server, filled with tons of fun stuff."
            hasLink="true"
            link="https://mc.ksc.sh"
            linkText="IP: mc.ksc.sh"
    />
    <ProjectCard
            name="Quantum"
            description="Minecraft plugin for random teleportation."
            hasLink="true"
            link="https://github.com/kadenscott/Quantum"
            linkText="GitHub.com"
    />
    <ProjectCard
            name="BingBonk"
            description="A fast-paced Minecraft minigame."
            hasLink="true"
            link="https://github.com/kadenscott/BingBonk"
            linkText="GitHub.com"
    />
</div>


<style>
    .projects {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>