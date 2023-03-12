import { Injectable } from "@nestjs/common";
import { config } from 'dotenv';
import { get } from 'lodash';

@Injectable()
export class ConfigService {
    constructor() { config(); }

    get(key: string, defaultValue: any): any {
        return get(process, ['env', key], defaultValue);
    }
}