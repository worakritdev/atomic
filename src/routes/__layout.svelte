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
									<ion-icon name="Cube" slot="start"></ion-icon>
									<ion-label>Cube</ion-label>
								</ion-item>
							</a>
						</ion-menu-toggle>
						<ion-menu-toggle auto-hide="false">
							<a href="/board">
								<ion-item>
									<ion-icon name="globe" slot="start"></ion-icon>
									<ion-label>Globe</ion-label>
								</ion-item>
							</a>
						</ion-menu-toggle>
					</ion-list>
				</ion-content>
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
