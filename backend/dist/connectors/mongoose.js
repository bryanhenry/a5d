"use strict";
/**
 * src/connectors/mongoose.ts
 *
 * Setup mongoose.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongoHost + "/games").catch(function (err) {
    process.stdout.write(err.toString());
    process.exit(-1);
});
