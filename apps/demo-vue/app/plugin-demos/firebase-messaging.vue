<template>
	<Page>
		<ActionBar>
			<Label text="firebase-messaging" />
		</ActionBar>

		<GridLayout>
			<Button class="info" @tap="requestPermission" :text="message" />
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-messaging';
import { Messaging } from '@nativescript/firebase-messaging';

export default Vue.extend({
	methods: {
		requestPermission: function (args) {
			const messaging = (firebase() as any).messaging() as Messaging;
      console.log('requestPermission');
			messaging
				.requestPermission()
				.then(() => {
					console.log('requestPermission', 'done');
					messaging.registerDeviceForRemoteMessages().catch((e) => {
						console.error('registerDeviceForRemoteMessages', e);
					});
				})
				.catch((e) => {
					console.error('requestPermission', e);
				});
		},
	},
	computed: {
		message() {
			return 'Request Permission';
		},
	},
});
</script>

<style scoped lang="scss">
.info {
	font-size: 20;
	horizontal-align: center;
	vertical-align: center;
}
</style>
