<script context="module">
	import ProjectCard from "$lib/ProjectCard/index.svelte";

	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Projects</h1>
	<div class="projects">
		<ProjectCard
				name="mc.ksc.sh"
				description="My Minecraft server, filled with tons of fun stuff."
				hasLink="true"
				link="https://mc.ksc.sh"
				linkText="Check it out!"
		/>
		<ProjectCard
				name="Quantum"
				description="Minecraft plugin for random teleportation."
				hasLink="true"
				link="https://github.com/kadenscott/Quantum"
				linkText="IP: mc.ksc.sh"
		/>
		<ProjectCard
				name="BingBonk"
				description="A fast-paced Minecraft minigame."
				hasLink="true"
				link="https://github.com/kadenscott/BingBonk"
				linkText="GitHub.com"
		/>
	</div>
</section>

<style>
	.projects {
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>
