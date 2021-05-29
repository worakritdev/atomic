<script>
	import CardDetail from '$lib/components/CardDetail.svelte';
	import { selectedStore } from '$lib/stores';
	import { fade } from 'svelte/transition';
	let isHide = false;
	// your script goes here
</script>

<body>
	<ion-app>
		<ion-split-pane when="sm" content-id="main-content">
			<ion-menu content-id="main-content" side="start" style="--side-width:15%;">
				<ion-header>
					<ion-toolbar color="light">
						<ion-title>🐱‍🏍</ion-title>
					</ion-toolbar>
				</ion-header>

				<ion-content>
					<ion-list>
						<ion-menu-toggle auto-hide="false">
							<a href="/">
								<ion-item>
									<ion-icon name="Cube" slot="start" />
									<ion-label>Cube</ion-label>
								</ion-item>
							</a>
						</ion-menu-toggle>
						<ion-menu-toggle auto-hide="false">
							<a href="/board">
								<ion-item>
									<ion-icon name="clipboard" slot="start" />
									<ion-label>Board</ion-label>
								</ion-item>
							</a>
						</ion-menu-toggle>
					</ion-list>
				</ion-content>
			</ion-menu>
			<ion-menu content-id="main-content" menu-id="end" id="sidemenu" side="end" transition:fade>
				{#if !isHide}
					<ion-header>
						<ion-toolbar color="medium" />
					</ion-header>

					<ion-content>
						<CardDetail {...$selectedStore} />
					</ion-content>
				{/if}
			</ion-menu>

			<div class="ion-page" id="main-content">
				<ion-header>
					<ion-toolbar>
						<ion-buttons slot="start">
							<ion-menu-toggle>
								<ion-button>
									<ion-icon slot="icon-only" name="menu" />
								</ion-button>
							</ion-menu-toggle>
						</ion-buttons>
						<ion-buttons slot="end">
							<ion-menu-toggle auto-hide="false" menu="end">
								<ion-button
									on:click={(ev) => {
										document.getElementById('sidemenu').classList.toggle('show-menu');
									}}
								>
									<ion-icon slot="icon-only" name="cube" />
								</ion-button>
							</ion-menu-toggle>
						</ion-buttons>
						<ion-title>🚀</ion-title>
					</ion-toolbar>
				</ion-header>
				<ion-content>
					<slot><!-- optional fallback --></slot>
				</ion-content>
			</div>
		</ion-split-pane>
	</ion-app>
</body>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
