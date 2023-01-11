import * as dotenv from 'dotenv';

import { IConfig } from './config.interface';

dotenv.config();

export default (): IConfig => ({
  port: parseInt(process.env.PORT, 10) || 8000,
  db_uri: process.env.DB_URI,
  newPasswordBytes: 4,
  codeBytes: 2,
});
