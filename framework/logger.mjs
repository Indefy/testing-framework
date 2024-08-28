import { createLogger, format, transports } from 'winston';
import path from 'path';
import 'winston-daily-rotate-file';

const env = process.env.NODE_ENV || 'development';

const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: path.join('logs', '%DATE%-app.log'),
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d'
    }),
  ],
});

// Placeholder for external logging service integration
// if (process.env.LOGGLY_TOKEN) {
//   logger.add(new Loggly({
//     token: process.env.LOGGLY_TOKEN,
//     subdomain: "your-subdomain",
//     tags: ["Winston-NodeJS"],
//     json: true
//   }));
// }

export default logger;
