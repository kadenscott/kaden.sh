<script context="module">
    export async function load({fetch}) {
        let post = null

        const res = await fetch('/api/blogposts.json')

        if (res.ok) {
            let posts = await res.json()

            post = posts[0]
        }

        return {
            props: { post }
        }
    }
</script>

<script>
    import marked from 'marked'

    const renderer = new marked.Renderer()

    renderer.link = (href, title, text) => {
        return '<a rel="external" href="'+href+'">'+text+'</a>'
    }

    export let post
</script>

<div>
    {@html marked(post, {renderer: renderer})}
</div>


