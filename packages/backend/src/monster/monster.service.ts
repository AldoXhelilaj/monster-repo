import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MonsterService {
    constructor(private readonly prismaService: PrismaService) { }

    async findAll(): Promise<any> {
        return this.prismaService.monster.findMany();
    }

    async findOne(id: string): Promise<any> {
        return this.prismaService.monster.findUnique({
            where: { id: parseInt(id) },
        });
    }

    async create(data: any): Promise<any> {
        return this.prismaService.monster.create({
            data: {
                name: data.name,
                level: data.level,
                image: data.image,
                type: data.type,
            },
        });
    }

    async delete(id: string): Promise<any> {
        return this.prismaService.monster.delete({
            where: { id: parseInt(id) },
        });
    }
}
