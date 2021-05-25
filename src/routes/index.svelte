<script>
	import Gridjs from 'gridjs-svelte';

	import Grid from 'gridjs-svelte';
	import { onMount } from 'svelte';
	let data = [];
	

	const columns = ['name', 'url', 'details'];
</script>

<Grid {data} {columns} />

<style global>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
