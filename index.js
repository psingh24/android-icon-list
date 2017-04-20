'use strict';
const icons = require('./icons.json');

module.exports = density => {
	if (density && typeof density !== 'string') {
		throw new TypeError(`Expected \`density\` to be of type \`string\`, got \`${typeof density}\``);
	}

	if (density) {
		const icon = icons.find(icon => icon.density === density);

		if (!icon) {
			throw new Error(`Could not find icon for density \`${density}\``);
		}

		return icon;
	}

	return icons;
};
