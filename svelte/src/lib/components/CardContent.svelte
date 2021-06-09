<ion-card>
    <ion-card-header>
        <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>
        <ion-card-title>
            {title}
        </ion-card-title>
    </ion-card-header>
    <ion-card-content>
        <slot name="body">
            BOdy
        </slot>
    </ion-card-content>
</ion-card>

<script>
    export let title;
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->