import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { CreateMonsterDto } from './dto/create-monster.dto';

@Controller('monster')
export class MonsterController {
    constructor(private readonly monsterService: MonsterService) { }

    @Get()
    async findAll(): Promise<any> {
        return this.monsterService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<any> {
        return this.monsterService.findOne(id);
    }

    @Post()
    async create(@Body() data: CreateMonsterDto): Promise<any> {
        return this.monsterService.create(data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return this.monsterService.delete(id);
    }

}
