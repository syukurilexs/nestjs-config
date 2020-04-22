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

  // Commonly use env var
  get mongoHost(): string {
    return this.get('MONGO_HOST');
  }

  // Commonly use env var
  get isDevEnv(): boolean {
    const nodeEnv = this.get('NODE_ENV');

    if (nodeEnv === 'development') {
      return true;
    }
    return false;
  }

  // Commonly use env var
  get logSource(): string {
    return this.get('LOG_SOURCE');
  }

  // Commonly use env var
  get appName(): string {
    return this.get('APP_NAME');
  }

  // Commonly use env var
  get microLoggerHost() {
    return this.get('MICRO_LOGGER_HOST');
  }

  get(key: string): string {
    // check if the key is defined in .env file
    if (this.envConfig[key] === undefined) {
      throw Error(`This key [${key}] not is not defined in .env config file`);
    }

    return this.envConfig[key];
  }
}
