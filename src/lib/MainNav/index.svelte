<script>
    import {page} from "$app/stores"

    let path

    page.subscribe(r => {
        path = r.path
    })

</script>

<ul>
    <li class="font-mono"><a href="/" class:current={path === '/'}><h6>~/</h6></a></li>
    <li class="font-mono"><a href="/projects" class:current={path === '/projects'}><h6>~/projects</h6></a></li>
    <li class="font-mono"><a href="/blog" class:current={path === '/blog'}><h6>~/blog</h6></a></li>
    <li class="font-mono"><a href="/about" class:current={path === '/about'}><h6>~/about</h6></a></li>
    <li class="font-mono"><a href="/contact" class:current={path === '/contact'}><h6>~/contact</h6></a></li>
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

.current h6 {
    background-color: var(--theme-colour-bg-darkest);
    color: var(--theme-colour-text)
}

h6 {
    text-decoration: none;
    margin: 0.2em;
    background-color: inherit;
    color: var(--theme-colour-text-dark);
}
</style>
