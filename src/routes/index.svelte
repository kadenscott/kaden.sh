<script context="module">
	export const prerender = true;
</script>

<script>
	import MiniCard from '$lib/MiniCard/index.svelte'
</script>


<style>
	.cards {
		display: flex;
		flex-direction: row;
	}
</style>

<svelte:head>
	<title>$ kaden.sh</title>
</svelte:head>

<h1>Projects</h1>
<div class="cards">
	<MiniCard name="tinybox" type="Web">
		<img src="http://localhost:3000/img/tinybox.png" slot="image">
	</MiniCard>
</div>