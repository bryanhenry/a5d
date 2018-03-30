/**
 * src/connectors/mongoose.ts
 *
 * Setup mongoose.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 */

import * as mongoose from 'mongoose';

(<any>mongoose).Promise = global.Promise;
mongoose.connect(`${process.env.mongoHost}/games`).catch(err => {
  process.stdout.write(err.toString());
  process.exit(-1);
});



