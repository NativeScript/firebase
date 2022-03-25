const { spawnSync } = require('child_process');
const fs = require('fs');
const { join } = require('path');

const projectRoot = join(__dirname, '..', '..');

const packages = fs.readdirSync(join(projectRoot, 'packages'));

packages.forEach((package) => {
	if (fs.existsSync(join(projectRoot, 'packages', package, 'typings'))) {
		const typings = fs.readdirSync(join(projectRoot, 'packages', package, 'typings'));
		if (typings.length > 0) {
			fs.writeFileSync(join(projectRoot, 'packages', package, 'typings', 'index.d.ts'), typings.map((file) => `/// <reference path="./${file}" />`).join('\n') + '\n');
			const projectJson = JSON.parse(fs.readFileSync(join(projectRoot, 'packages', package, 'project.json'), 'utf8'));
			const targets = projectJson.targets;
			for (const target of Object.keys(targets)) {
				if (targets[target].options) {
					const options = targets[target].options;
					if (options.assets) {
						if (options.assets.find((f) => f === `packages/${package}/typings/*.d.ts`)) {
							return;
						}
						/** @type string[] */
						const assets = options.assets;
						let targetIdx = assets.length - 1;
						assets.forEach((asset, idx) => {
							if (typeof asset !== 'string') return;
							if (asset.startsWith(`packages/${package}/`)) {
								targetIdx = idx;
							}
						});
						assets.splice(targetIdx + 1, 0, `packages/${package}/typings/*.d.ts`);
					}
				}
			}
			fs.writeFileSync(join(projectRoot, 'packages', package, 'project.json'), JSON.stringify(projectJson, null, 2));
			spawnSync('npx', ['prettier', '--write', join(projectRoot, 'packages', package, 'project.json')]);
			spawnSync('npx', ['prettier', '--write', join(projectRoot, 'packages', package, 'typings', 'index.d.ts')]);
		}
	}
});
