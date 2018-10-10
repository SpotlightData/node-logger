import winston from 'winston';
import { generateISOString } from './helpers/date';
import { formatter } from './helpers/formatter';

const logger = new winston.Logger();

logger.add(winston.transports.Console, {
  timestamp: generateISOString,
  formatter: formatter,
});

export default logger;
