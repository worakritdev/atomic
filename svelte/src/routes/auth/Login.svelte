<script>
    // your script goes here

    import Box from "$lib/components/Box.svelte";
    import { get } from "mongoose";
    let auth;
    $: {
        console.log(auth);
    }
</script>

<!-- markup (zero or more items) goes here -->

<Box>
    <form action="" method="POST">
        <ion-item>
            <ion-label position="floating">Username</ion-label>
            <ion-input type="text" name="Username" />
        </ion-item>
        <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" name="Password" />
        </ion-item>
        <ion-button
            fill="solid"
            shape="round"
            on:click={(ev) => console.log(ev)}
        >
            Login
        </ion-button>
    </form>
</Box>
`

<style>
    /* your styles go here */
</style>
