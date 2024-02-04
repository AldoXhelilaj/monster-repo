import { PrismaService } from '../prisma/prisma.service';
export declare class MonsterService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    create(data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
