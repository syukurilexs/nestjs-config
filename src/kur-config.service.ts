import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync('config/' + filePath));
  }

  get(key: string): string {
    // check if the key is defined in .env file
    if (this.envConfig[key] === undefined) {
      throw Error(`This key [${key}] not is not defined in .env config file`);
    }

    return this.envConfig[key];
  }
}
