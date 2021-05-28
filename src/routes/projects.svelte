<script>
    import MiniCard from '$lib/HorizontalCard/index.svelte'
</script>

<h2>Projects</h2>
<p>here are my cool, epic, pogger projects!!!!</p>

<div class="projects">
    <MiniCard colour="red" type="web" name="tinybox">
        <div slot="content">
            <p class="text-dark">tinybox is an all-in-one store for your files</p>
        </div>
    </MiniCard>
    <MiniCard colour="blue-green" type="web" name="startmc.sh">
        <div slot="content">
            <p class="text-dark">a simple app to create a minecraft server start script</p>
        </div>
    </MiniCard>
    <MiniCard type="minecraft" name="Quantum">
        <div slot="content">
            <p class="text-dark">The random teleportation plugin.</p>
        </div>
    </MiniCard>
</div>

<style>
    .projects {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .projects > * {
        flex: 1;
    }
</style>