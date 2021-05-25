<script>
	import { posts } from '../routes/api/posts.json';
	import Grid from "gridjs-svelte"
	import { onMount } from 'svelte';
	let data = posts;
	const columns =[{name:'name'},{name:'url',width:50}]
</script>

<Grid {data} {columns} />


<style global>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
