/**
 * backend/etc/config.ts
 *
 * Configuration file for app.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 *
 */

require('dotenv').config();

export const config = {
  mongoHost: process.env.mongoHost,
};
