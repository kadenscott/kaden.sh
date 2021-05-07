<script>
	import ThemeToggle from '$lib/ThemeToggle/index.svelte'
</script>

<header class="header">
	<div class="corner-left">

	</div>
	<div class="title">
		<h1>$ kaden.sh</h1>
	</div>
	<div class="corner-right">
		<ThemeToggle />
	</div>
</header>

<style>
	.title {
		font-family: var(--font-mono);
		margin: 0;
		padding: 0.1em 0.2em;
		border-radius: 0.3em;
		background-color: black;
		color: #a8a8a8;
	}

	.title h1 {
		padding: 0;
		margin: 0;
		height: fit-content;
	}

	.header {
		background-color: var(--colour-bg-2);
		transition: background-color 0.2s;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 0.5em;
	}
</style>
