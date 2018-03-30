"use strict";
/**
 * backend/etc/config.ts
 *
 * Configuration file for app.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.config = {
    mongoHost: process.env.mongoHost,
};
