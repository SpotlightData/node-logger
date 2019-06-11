const { createLogger, transports, config, format } = require('winston');
import { generateISOString } from './helpers/date';
import { formatter, cleanFormatter } from './helpers/formatter';

export const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.timestamp({
      format: () => generateISOString
    }),
    format.printf(formatter)
  )
});

export const clog = createLogger({
  levels: config.npm.levels,
  transports: [new transports.Console({
    stderrLevels: ["error"]
  })],
  format: format.combine(
    format.colorize({ colors: config.npm.colors }),
    format.printf(cleanFormatter)
  )
});

export default logger;
