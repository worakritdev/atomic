<script>
	import supabase from '$lib/database/db';
	import { user } from '$lib/stores';
	import { onMount } from 'svelte';
	import SignUp from './SignUp.svelte';
	let email, password;

	onMount(async () => {
		$user = JSON.stringify(supabase.auth.user());
	});

	async function signIn() {
		let { user, error } = await supabase.auth.signIn({
			email: email,
			password: password
		});
	}
</script>

{#if $user}
	{JSON.parse($user).email}
{:else}
	<ion-card>
		<ion-card-header>
			<ion-card-title>Sign In</ion-card-title>
		</ion-card-header>
		<ion-card-content>
			<form on:submit|preventDefault={signIn}>
				<ion-item>
					<ion-label position="floating">Email<ion-text color="danger">*</ion-text></ion-label>
					<ion-input required type="email" on:input={(ev) => (email = ev.target.value)} />
				</ion-item>
				<ion-item>
					<ion-label position="floating">Password<ion-text color="danger">*</ion-text></ion-label>
					<ion-input required type="password" on:input={(ev) => (password = ev.target.value)} />
				</ion-item>
				<ion-button type="submit" fill="solid" shape="round"> Sign In </ion-button>
			</form>
		</ion-card-content>
	</ion-card>
{/if}

<style>
	/* your styles go here */
</style>
