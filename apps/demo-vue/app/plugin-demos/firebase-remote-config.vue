<template>
	<Page>
		<ActionBar>
			<Label text="firebase-remote-config" />
		</ActionBar>

		<GridLayout>
			<Button class="info" :text="message" />
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { DemoSharedFirebaseRemoteConfig } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-remote-config';

export default Vue.extend({
	computed: {
		message() {
			return 'Test firebase-remote-config';
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
