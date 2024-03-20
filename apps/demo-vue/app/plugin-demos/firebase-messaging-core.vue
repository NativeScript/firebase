<template>
	<Page>
		<ActionBar>
			<Label text="firebase-messaging-core" />
		</ActionBar>

		<GridLayout>
			<Button class="info" :text="message" />
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { DemoSharedFirebaseMessagingCore } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-messaging-core';

export default Vue.extend({
	computed: {
		message() {
			return 'Test firebase-messaging-core';
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
