<template>
	<Page>
		<ActionBar>
			<Label text="firebase-functions" />
		</ActionBar>

		<GridLayout>
			<Button class="info" :text="message" />
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { DemoSharedFirebaseFunctions } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-functions';

export default Vue.extend({
	computed: {
		message() {
			return 'Test firebase-functions';
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
