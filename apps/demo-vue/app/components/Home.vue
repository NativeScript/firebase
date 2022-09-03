<template>
	<Page>
		<ActionBar>
			<Label text="Home" />
		</ActionBar>

		<GridLayout>
			<ListView for="item in demos" @itemTap="navigate">
				<v-template>
					<GridLayout class="p-y-10">
						<Label :text="item.name"></Label>
					</GridLayout>
				</v-template>
			</ListView>
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import Admob from '../plugin-demos/firebase-admob.vue';
import Analytics from '../plugin-demos/firebase-analytics.vue';
import AppCheck from '../plugin-demos/firebase-app-check.vue';
import AppCheckDebug from '../plugin-demos/firebase-app-check-debug.vue';
import Auth from '../plugin-demos/firebase-auth.vue';
import Core from '../plugin-demos/firebase-core.vue';
import Crashlytics from '../plugin-demos/firebase-crashlytics.vue';
import Database from '../plugin-demos/firebase-database.vue';
import DynamicLinks from '../plugin-demos/firebase-dynamic-links.vue';
import FireStore from '../plugin-demos/firebase-firestore.vue';
import Functions from '../plugin-demos/firebase-functions.vue';
import InAppMessaging from '../plugin-demos/firebase-in-app-messaging.vue';
import Installations from '../plugin-demos/firebase-installations.vue';
import MessagingCore from '../plugin-demos/firebase-messaging-core.vue';
import Messaging from '../plugin-demos/firebase-messaging.vue';
import Performance from '../plugin-demos/firebase-performance.vue';
import RemoteConfig from '../plugin-demos/firebase-remote-config.vue';
import Storage from '../plugin-demos/firebase-storage.vue';

const routes = [
	{
		name: 'firebase-admob',
		detail: Admob,
	},
	{
		name: 'firebase-analytics',
		detail: Analytics,
	},
	{
		name: 'firebase-app-check',
		detail: AppCheck,
	},
	{
		name: 'firebase-app-check-debug',
		detail: AppCheckDebug,
	},
	{
		name: 'firebase-auth',
		detail: Auth,
	},
	{
		name: 'firebase-core',
		detail: Core,
	},
	{
		name: 'firebase-crashlytics',
		detail: Crashlytics,
	},
	{
		name: 'firebase-database',
		detail: Database,
	},
	{
		name: 'firebase-dynamic-links',
		detail: DynamicLinks,
	},
	{
		name: 'firebase-firestore',
		detail: FireStore,
	},
	{
		name: 'firebase-functions',
		detail: Functions,
	},
	{
		name: 'firebase-in-app-messaging',
		detail: InAppMessaging,
	},
	{
		name: 'firebase-installations',
		detail: Installations,
	},
	{
		name: 'firebase-messaging',
		detail: Messaging,
	},
	{
		name: 'firebase-messaging-core',
		detail: MessagingCore,
	},
	{
		name: 'firebase-performance',
		detail: Performance,
	},
	{
		name: 'firebase-remote-config',
		detail: RemoteConfig,
	},
	{
		name: 'firebase-storage',
		detail: Storage,
	},
];
export default Vue.extend({
	methods: {
		navigate(args) {
			const link = args.item.name;
			const route = routes.find((item) => {
				return item.name === link;
			});
			if (route) {
				this.$navigateTo(route.detail);
			}
		},
	},
	computed: {
		message() {
			return 'Demo {N}-Vue app';
		},
		demos() {
			return [
				{
					name: 'firebase-admob',
				},
				{
					name: 'firebase-analytics',
				},
				{
					name: 'firebase-app-check',
				},
				{
					name: 'firebase-app-check-debug',
				},
				{
					name: 'firebase-auth',
				},
				{
					name: 'firebase-core',
				},
				{
					name: 'firebase-crashlytics',
				},
				{
					name: 'firebase-database',
				},
				{
					name: 'firebase-dynamic-links',
				},
				{
					name: 'firebase-firestore',
				},
				{
					name: 'firebase-functions',
				},
				{
					name: 'firebase-in-app-messaging',
				},
				{
					name: 'firebase-installations',
				},
				{
					name: 'firebase-messaging',
				},
				{
					name: 'firebase-messaging-core',
				},
				{
					name: 'firebase-performance',
				},
				{
					name: 'firebase-remote-config',
				},
				{
					name: 'firebase-storage',
				},
			];
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
