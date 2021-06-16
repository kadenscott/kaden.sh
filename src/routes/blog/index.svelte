<script context="module">
    import marked from 'marked'

    export async function load({fetch}) {
        const renderer = new marked.Renderer()

        renderer.link = (href, title, text) => {
            return '<a rel="external" href="'+href+'">'+text+'</a>'
        }

        let post = null

        const res = await fetch('/api/blogposts.json')

        if (res.ok) {
            let posts = await res.json()

            post = posts[0]
        }

        const formattedPost = post ? marked(post, {renderer}) : "<p>There are no blog posts to show.</p>"

        return {
            props: { post: formattedPost }
        }
    }
</script>

<script>
    export let post
</script>

<div>
    {@html post}
</div>


