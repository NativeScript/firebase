const fs = require('fs');
const path = require('path');

export = function ($logger, $projectData, hookArgs) {
	const platformName = ((hookArgs.prepareData && hookArgs.prepareData.platform) || (hookArgs.platformData && hookArgs.platformData.normalizedPlatformName) || '').toLowerCase();

	if (platformName === 'ios') {
		const rootPath = $projectData.projectDir;

		const Podfile = path.join(rootPath, 'platforms', 'ios', 'Podfile');
		const ResourcePodfile = $projectData.podfilePath;

		if (fs.existsSync(Podfile) && fs.existsSync(ResourcePodfile)) {
			const podData = fs.readFileSync(Podfile, 'utf8') || '';
			const resourcePodData = fs.readFileSync(ResourcePodfile, 'utf8');

			// set variable early in the Podfile
			if (podData && resourcePodData && resourcePodData.indexOf('$NSFirebaseAnalyticsWithoutAdIdSupport=true') > -1) {
				fs.writeFileSync(Podfile, '$NSFirebaseAnalyticsWithoutAdIdSupport=true \n' + podData);
			}
		}
	}
};
