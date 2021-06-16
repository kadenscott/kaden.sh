<div class="nav-container">
    <ul class="nav">
        <li class="nav__link font-mono"><a href="/">index</a></li>
        <li class="nav__link font-mono"><a href="/projects">projects</a></li>
        <li class="nav__link font-mono"><a href="/blog">blog</a></li>
    </ul>
</div>

<style>
    .nav-container {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0.35em;
        padding-bottom: 0.35em;
        margin: 0;
        border-bottom: 1px solid;
    }

    .nav {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        list-style-type: none;
        padding: 0;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
    }

    .nav__link {
        margin: 1em;
    }

    .nav__link > a {
        background-color: black;
        color: white;
        padding: 0.35em;
        text-decoration: none;
        border-radius: 0.25em;
    }
</style>
