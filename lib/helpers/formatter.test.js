import { formatter } from './formatter';
import { generateISOString } from './date';

describe('Formatting helpers', () => {
	it('should format a simple log', () => {
		const opts = {
			timestamp: generateISOString,
			message: 'Test log',
			level: 'warning'
		};

		let formatted = formatter(opts);

		let parsed = undefined;

		expect(() => {
			parsed = JSON.parse(formatted);
		}).not.toThrow();

		expect(parsed).toBeDefined();

		expect(parsed['@message']).toEqual(opts.message);

		expect(parsed['@fields']['@level']).toEqual('WARNING');
	});

	it('should format a JSON message log', () => {
		const opts = {
			timestamp: generateISOString,
			message: {test: 'JSON string'},
			level: 'info'
		};

		let formatted = formatter(opts);

		let parsed = undefined;

		expect(() => {
			parsed = JSON.parse(formatted);
		}).not.toThrow();

		expect(parsed).toBeDefined();

		let message = parsed['@message'];

		expect(() => {
			message = JSON.parse(message);
		}).not.toThrow();

		expect(message).toEqual({test: 'JSON string'});

		expect(parsed['@fields']['@level']).toEqual('INFO');
	});
});