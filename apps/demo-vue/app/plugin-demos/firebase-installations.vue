<template>
	<Page>
		<ActionBar>
			<Label text="firebase-installations" />
		</ActionBar>

		<GridLayout>
			<Button class="info" :text="message" />
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { DemoSharedFirebaseInstallations } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-installations';

export default Vue.extend({
	computed: {
		message() {
			return 'Test firebase-installations';
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
