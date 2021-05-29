<!-- https://eugenkiss.github.io/7guis/tasks#crud -->
<script>
	import { selectedStore } from '$lib/stores';
	import { toggle_class } from 'svelte/internal';

	import { writable } from 'svelte/store';
	let blogs = [
		{
			name: 'Pbox',
			details: 'Search, Fuzzy Search, Super, Speed, Suggest, Service',
			url: 'http://example.com'
		}
	];
	let prefix = '';
	let name = '';
	let url,
		details = '';
	let i = 0;

	$: filteredblogs = prefix
		? blogs.filter((blog) => {
				const name = `${blog.details}, ${blog.name}`;
				return name.toLowerCase().startsWith(prefix.toLowerCase());
		  })
		: blogs;
	$: selected = filteredblogs[i];
	$: $selectedStore = selected;
	$: reset_inputs(selected);


	function update() {
		selected.name = name;
		selected.details = details;
		blogs = blogs;
	}

	function remove() {
		// Remove selected blog from the source array (blogs), not the filtered array
		delete blogs[i];
		blogs = blogs.flat();
	}

	function reset_inputs(blog) {
		name = blog ? blog.name : '';
		details = blog ? blog.details : '';
	}
</script>

<ion-header>
	<ion-toolbar>
		<ion-title>Board</ion-title>
	</ion-toolbar>
</ion-header>
{#each blogs as blog, i}
	<ion-item button on:click={(ev) => ($selectedStore = blog)}>
		<ion-label>
			<p>{blog.details}</p>
			<h2>{blog.name}</h2>
		</ion-label>
	</ion-item>
{/each}
