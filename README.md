# Node logger

Wrapper for [winston](https://github.com/winstonjs/winston)

## Usage

```javascript
// cjs const logger = require('@spotlightdata/node-logger').default
import logger from '@spotlightdata/node-logger';

logger.error('Unknown error occurred handling task.');
logger.log('info', 'Hello distributed log files!');
logger.info('Hello again distributed logs');
```

## Development

- Install packages using `yarn install`
- Start in development mode by using `yarn dev`
- Finally build with `yarn build`
- Run tests using `yarn test`

All versions will automatically be deployed using travis when tagged on master.
