<script context="module">
    import { MESSAGE, API } from "$lib/Env";
    export async function load({ fetch, page }) {
        const baseurl = `http://${API}/blogs`;
        console.log(baseurl);
        const res = await fetch(baseurl);

        const blogs = await res.json();
        if (res.ok)
            return {
                props: {
                    blogs: blogs,
                },
            };
    }
</script>

<script>
    // your script goes here
    let searchTerm = "";

    $: {
        console.log(searchTerm);
    }
</script>

<h1>Home</h1>