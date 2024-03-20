<template>
	<Page>
		<ActionBar>
			<Label text="firebase-core" />
		</ActionBar>

		<GridLayout>
			<Button class="info" :text="message" />
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { DemoSharedFirebaseCore } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-core';

export default Vue.extend({
	computed: {
		message() {
			return 'Test firebase-core';
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
