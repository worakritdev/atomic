<script>
	// your script goes here
	export let i = 0,
		cubes = [{ name: 'Initail', id: 1, type: 'cube' }];

	$: cube = {
		name: 'Cube',
		id: cubes.length + 1,
		type: 'cube'
	};

	function remove(i) {
		delete cubes[i];
		cubes = [...cubes.flat()];
		console.log(cubes);
	}
	function create() {
		cubes = [...cubes, cube];
	}

	$: selected = cubes[i];
</script>

<!-- markup (zero or more items) goes here -->
<ion-fab vertical="bottom" horizontal="end" fixed>
	<ion-fab-button><ion-icon name="cube" /></ion-fab-button>
	<ion-fab-list side="top">
		<ion-fab-button><ion-icon name="search" /></ion-fab-button>
		<ion-fab-button on:click={(ev) => (cubes = [...cubes, cube])}
			><ion-icon name="add" /></ion-fab-button
		>
	</ion-fab-list>
</ion-fab>
<ion-header>
	<ion-toolbar>
		<ion-button on:click={create} fill="outline" shape="round"> เพิ่ม </ion-button>
	</ion-toolbar>
</ion-header>
<div class="board">
	<div class="left">
		<ion-list>
			{#each cubes as cube, i}
				<!-- content here -->
				<ion-item-sliding>
					<ion-item button on:click={() => (selected = cubes[i])}>
						<ion-label>{cube.name} {cube.id}</ion-label>
					</ion-item>
					<ion-item-options side="start">
						<ion-item-option>Favorite</ion-item-option>
						<ion-item-option color="light">Share</ion-item-option>
					</ion-item-options>

					<ion-item-options side="end">
						<ion-item-option>Unread</ion-item-option>
					</ion-item-options>
				</ion-item-sliding>
			{/each}
		</ion-list>
	</div>
	<div class="right">
		<ion-card>
			<input type="text" name="name" id="name" placeholder="name" bind:value={selected.name}/>
		</ion-card>
	</div>
</div>

<style>
	.left,
	.right {
		@apply w-1/2;
	}
	.board {
		@apply w-screen flex;
	}
	ion-card {
		height: 60vh;
	}
	input {
		margin: 2em;
	}
</style>
