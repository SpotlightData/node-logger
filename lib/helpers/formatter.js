export const formatter = (opts) => {
	let formattedMessage = {};

	formattedMessage['@timestamp'] = opts.timestamp();

	if (typeof opts.message === 'string' || opts.message instanceof String) {
		if (opts.message === '' && opts.meta.message) {
			formattedMessage['@message'] = opts.meta.message;
		} else if (opts.message === '' && opts.meta.stack) {
			formattedMessage['@message'] = opts.meta.stack;
		} else {
			formattedMessage['@message'] = opts.message;
		}
	} else {
		formattedMessage['@message'] = JSON.stringify(opts.message);
	}

	formattedMessage['@fields'] = {
		'@level': opts.level.toUpperCase()
	};

	return JSON.stringify(formattedMessage);
};

export function cleanFormatter(opts) {
	if (typeof opts.reason !== "string") {
		throw new TypeError("Expected reason to be a string");
	}
	if (typeof opts.message !== "string") {
		throw new TypeError("Expected message to be a string")
	}
	let time = "";
	if (opts.time === true) {
		time = `[${new Date().toUTCString()}]`
	}
	return `[${opts.level}]${time}[${opts.reason}]: ${opts.message}`
}
