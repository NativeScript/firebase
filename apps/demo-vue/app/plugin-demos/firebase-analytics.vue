<template>
	<Page>
		<ActionBar>
			<Label text="firebase-analytics" />
		</ActionBar>

		<GridLayout>
			<Button class="info" :text="message" />
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { DemoSharedFirebaseAnalytics } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-analytics';

export default Vue.extend({
	computed: {
		message() {
			return 'Test firebase-analytics';
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
