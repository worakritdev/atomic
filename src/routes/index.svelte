<script>
	import { posts } from '../routes/api/posts.json';
	import Gridjs from 'gridjs-svelte';
	import { onMount } from 'svelte';
	let data = posts;
	let columns = ['name','tags','details','url','details'];
</script>

<Gridjs {data} {columns} autoWidth />

<style global>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
