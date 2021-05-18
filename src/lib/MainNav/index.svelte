<ul class="links">
    <li class="link-element font-mono"><a href="/"><h3>~/</h3></a></li>
    <li class="link-sep font-mono">•</li>
    <li class="link-element font-mono"><a href="/projects"><h3>~/projects</h3></a></li>
    <li class="link-sep font-mono">•</li>
    <li class="link-element font-mono"><a href="/blog"><h3>~/blog</h3></a></li>
    <li class="link-sep font-mono">•</li>
    <li class="link-element font-mono"><a href="/about"><h3>~/about</h3></a></li>
    <li class="link-sep font-mono">•</li>
    <li class="link-element font-mono"><a href="/contact"><h3>~/contact</h3></a></li>
</ul>

<style>
    h1, h2, h3, h4, h5, h6 {
        background-color: transparent;
        color: var(--theme-text);
    }

    .links {
        list-style-type: none;
        padding: 0;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        flex-wrap: wrap;
    }

    .link-element {
        display: inline-block;
        border-radius: 0.25em;
        padding-inline: 0.5em;
        color: var(--theme-text-highlight);
    }

    .link-element:hover {
        color: var(--theme-text-highlight-alt);
    }

    .link-element:active {
        color: var(--theme-text);
    }

    /*.link-sep {*/
    /*    font-size: 2em;*/
    /*    margin-inline: 0.45em;*/
    /*    display: inline-block;*/
    /*}*/

    .link-element a {
        text-decoration: none;
        display: inline-block;
    }

    .link-element a:visited, a:link {
        color: inherit;
    }

    /*h3 {*/
    /*    display: inline-block;*/
    /*    margin: 0;*/
    /*}*/
</style>
