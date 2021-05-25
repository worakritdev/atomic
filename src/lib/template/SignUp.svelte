<script>
	import supabase from '$lib/database/db';
	let email, password;

	async function signUp() {
		let { user, error } = await supabase.auth.signUp({
			email: email,
			password: password
		});
		console.log(user, error);
	}
</script>

<ion-card>
	<ion-card-header>
		<ion-card-title>Sign Up</ion-card-title>
	</ion-card-header>
	<ion-card-content>
		<form on:submit|preventDefault={signUp}>
			<ion-item>
				<ion-label position="floating">Email<ion-text color="danger">*</ion-text></ion-label>
				<ion-input required type="email" on:input={(ev) => (email = ev.target.value)} />
			</ion-item>
			<ion-item>
				<ion-label position="floating">Password <ion-text color="danger">*</ion-text></ion-label>
				<ion-input required type="password" on:input={(ev) => (password = ev.target.value)} />
			</ion-item>
			<ion-button type="submit" fill="solid" shape="round"> Sign Up </ion-button>
		</form>
	</ion-card-content>
</ion-card>

<style>
	/* your styles go here */
</style>

