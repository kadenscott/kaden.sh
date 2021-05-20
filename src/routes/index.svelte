<script context="module">
	export const prerender = true;
</script>

<script>
	import MiniCard from '$lib/MiniCard/index.svelte'
</script>

<svelte:head>
	<title>$ kaden.sh</title>
</svelte:head>

<h2>Projects</h2>
<p>here are my cool, epic, pogger projects!!!!</p>

<div class="projects">
	<MiniCard colour="green" type="web" name="tinybox">
		<div slot="content">
			<p>tinybox is an all-in-one store for your files</p>
		</div>
	</MiniCard>
	<MiniCard colour="blue-green" type="web" name="startmc.sh">
		<div slot="content">
			<p>a simple app to create a minecraft server start script</p>
		</div>
	</MiniCard>
	<MiniCard type="minecraft" name="Quantum">
		<div slot="content">
			<p>The random teleportation plugin.</p>
		</div>
	</MiniCard>
	<MiniCard colour="blue-green" type="web" name="tinybox">
		<div slot="content">
			<p>tinybox is an all-in-one store for your files </p>
		</div>
	</MiniCard>
	<MiniCard colour="red" type="web" name="tinybox">
		<div slot="content">
			<p>tinybox is an all-in-one store for your files </p>
		</div>
	</MiniCard>
</div>

<style>
	.projects {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.projects > * {
		flex: 1;
	}
</style>