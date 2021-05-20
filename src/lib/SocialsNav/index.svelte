<script>
    import Fa from "svelte-fa"
    import {faTwitter, faYoutube, faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons"
    import {faFileCode} from "@fortawesome/free-solid-svg-icons"
</script>

<ul>
    <li class="font-mono"><a href="https://chat.ksc.sh"><h6><Fa icon="{faDiscord}" /></h6></a></li>
    <li class="font-mono"><a href="https://chat.ksc.sh"><h6><Fa icon="{faYoutube}" /></h6></a></li>
    <li class="font-mono"><a href="https://chat.ksc.sh"><h6><Fa icon="{faTwitter}" /></h6></a></li>
    <li class="font-mono"><a href="https://chat.ksc.sh"><h6><Fa icon="{faGithub}" /></h6></a></li>
    <li class="font-mono"><a href="https://chat.ksc.sh"><h6><Fa icon="{faFileCode}" /></h6></a></li>
</ul>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        justify-content: center;
        margin: 0;
        padding: 0;
        overflow: hidden;
        list-style-type: none;
    }

    ul li {
        margin-inline: 0.5em;
        font-size: 2rem;
        list-style: none;
        display: inline;
    }

    ul li a {
        text-decoration: none;
    }

    ul li a h6 {
        background-color: inherit;
    }
</style>
