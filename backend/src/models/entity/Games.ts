import {GamesInterface} from '../interfaces/GamesInterface';

/**
 * src/models/entity/Games.ts
 *
 * Model for games.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 */

import * as mongoose from 'mongoose';
import { GameSchema } from '../schema/GameSchema';

export default mongoose.model<GamesInterface>('Games', GameSchema);
