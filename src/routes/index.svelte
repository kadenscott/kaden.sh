<script context="module">
	export const prerender = true;
</script>

<script>
	import MiniCard from '$lib/MiniCard/index.svelte'
	import IconLink from '$lib/IconLink/index.svelte'

	import {faDiscord, faYoutube, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
	import {faFileCode} from '@fortawesome/free-solid-svg-icons'
</script>

<svelte:head>
	<title>$ kaden.sh</title>
</svelte:head>

<h1>welcome to the website of <span class="gradient-green-blue gradient-text">kadenscott</span>.</h1>

<ul class="social-links gradient-red-orange">
	<li><IconLink icon={faDiscord} text="My Discord server" link="https://chat.ksc.sh"/></li>
	<li><IconLink icon={faYoutube} text="YouTube" link="https://chat.ksc.sh"/></li>
	<li><IconLink icon={faTwitter} text="Twitter" link="https://chat.ksc.sh"/></li>
	<li><IconLink icon={faGithub} text="GitHub" link="https://chat.ksc.sh"/></li>
	<li><IconLink icon={faFileCode} text="kscott.dev" link="https://kscott.dev"/></li>
</ul>

<style>
	.social-links {
		margin-top: 5em;
		padding: 2em 0;
		border-radius: 0.2em;
		list-style-type: none;

		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;

	}

	.social-links li {
		font-size: 3rem;
		margin: 0.1em;
		display: inline;
	}
</style>