<div class="nav-container">
    <ul class="nav">
        <li class="nav__link font-mono"><a href="/">index</a></li>
        <li class="nav__link font-mono"><a href="/projects">projects</a></li>
        <li class="nav__link font-mono"><a href="/blog">blog</a></li>
    </ul>
    <div class="spacer">
        <hr>
    </div>
</div>

<style>
    .nav-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nav {
        width: 66ch;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style-type: none;
        padding: 0;
    }

    .nav__link > a {
        background-color: black;
        color: white;
        padding: 0.35em;
        text-decoration: none;
        border-radius: 0.25em;
    }

    .spacer {
        flex-grow: 1;
        width: 100%;
    }
</style>
