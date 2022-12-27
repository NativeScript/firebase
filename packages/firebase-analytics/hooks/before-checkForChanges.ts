import * as fs from 'fs';
import * as path from 'path';

export = function ($logger, $projectData, hookArgs) {
	const platformName = ((hookArgs.prepareData && hookArgs.prepareData.platform) || (hookArgs.platformData && hookArgs.platformData.normalizedPlatformName) || '').toLowerCase();

	if (platformName === 'ios') {
		const ResourcePodfile = $projectData.podfilePath;
		const PluginPodfile = path.join(__dirname, '..', 'platforms', 'ios', 'Podfile');

		if (fs.existsSync(PluginPodfile) && fs.existsSync(ResourcePodfile)) {
			const pluginPodData = fs.readFileSync(PluginPodfile, 'utf8') || '';
			const resourcePodData = fs.readFileSync(ResourcePodfile, 'utf8');

			// set variable in our Podfile to ensure it's picked up correctly
			if (pluginPodData) {
				const placeholderRegex = /^(\s*)(.*?)### PLACEHOLDER_FOR_HOOK: \$NSFirebaseAnalyticsWithoutAdIdSupport$/m;
				const enabledRegex = /^(\s*)\$NSFirebaseAnalyticsWithoutAdIdSupport=true\b/m;
				const isEnabled = enabledRegex.test(resourcePodData);

				const pluginMatch = pluginPodData.match(placeholderRegex);
				if (pluginMatch) {
					// this will always be:
					// `   ### PLACEHOLDER_FOR_HOOK: $NSFirebaseAnalyticsWithoutAdIdSupport`
					// or `   $NSFirebaseAnalyticsWithoutAdIdSupport=true ### PLACEHOLDER_FOR_HOOK: $NSFirebaseAnalyticsWithoutAdIdSupport`
					// indentation is always preserved, and an extra space is added after "true"
					const replacement = isEnabled ? '$NSFirebaseAnalyticsWithoutAdIdSupport=true ' : '';
					const replacementLine = `${pluginMatch[1]}${replacement}### PLACEHOLDER_FOR_HOOK: $NSFirebaseAnalyticsWithoutAdIdSupport`;
					if (replacementLine !== pluginMatch[0]) {
						fs.writeFileSync(PluginPodfile, pluginPodData.replace(placeholderRegex, replacementLine));
					}
				} else {
					$logger.warn(`Could not find NSFirebaseAnalyticsWithoutAdIdSupport placeholder in ${PluginPodfile}`);
				}
			}
		}
	}
};
