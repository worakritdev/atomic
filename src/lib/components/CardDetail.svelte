<script>
	import { selectedStore } from '$lib/stores';

	// your script goes here

	export let id, name, value, details, url;
</script>

<!-- markup (zero or more items) goes here -->

<ion-card>
	<ion-card-content>
        {id} {value}
		<ion-item>
			<ion-label position="floating">Name</ion-label>
			<ion-input type="text" value={name} on:input={(ev) => (name = ev.target.value)} />
		</ion-item>
		<ion-item>
			<ion-label position="floating">Url</ion-label>
			<ion-input type="url" value={url} on:input={(ev) => (url = ev.target.value)} />
		</ion-item>
		<ion-item>
			<ion-label position="floating">Details</ion-label>
			<ion-input type="text" value={details} on:input={(ev) => (details = ev.target.value)} />
		</ion-item>
	</ion-card-content>
</ion-card>

<style>
	/* your styles go here */
</style>
