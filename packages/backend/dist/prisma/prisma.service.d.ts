import { ConfigService } from '@nestjs/config';
import { PrismaClient } from "prisma/prisma-client/index";
export declare class PrismaService extends PrismaClient {
    private readonly config;
    constructor(config: ConfigService);
}
