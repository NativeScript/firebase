<template>
	<Page>
		<ActionBar>
			<Label text="firebase-in-app-messaging" />
		</ActionBar>

		<GridLayout>
			<Button class="info" :text="message" />
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { DemoSharedFirebaseInAppMessaging } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-in-app-messaging';

export default Vue.extend({
	computed: {
		message() {
			return 'Test firebase-in-app-messaging';
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
