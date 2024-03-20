<template>
	<Page>
		<ActionBar>
			<Label text="firebase-app-check-debug" />
		</ActionBar>

		<GridLayout>
			<Button class="info" :text="message" />
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { DemoSharedFirebaseAppCheckDebug } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-app-check-debug';

export default Vue.extend({
	computed: {
		message() {
			return 'Test firebase-app-check-debug';
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
