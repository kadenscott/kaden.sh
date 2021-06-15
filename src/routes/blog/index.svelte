<script context="module">
    export async function load({fetch}) {
        let post = null

        const res = await fetch('/api/blogposts.json')

        if (res.ok) {
            let posts = await res.json();

            post = posts[0]
        }

        return {
            props: {post}
        }
    }
</script>

<script>
    import marked from 'marked'

    export let post;
</script>

<div>
    {@html marked(post)}
</div>


