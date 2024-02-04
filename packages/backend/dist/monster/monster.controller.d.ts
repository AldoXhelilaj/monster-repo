import { MonsterService } from './monster.service';
import { CreateMonsterDto } from './dto/create-monster.dto';
export declare class MonsterController {
    private readonly monsterService;
    constructor(monsterService: MonsterService);
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    create(data: CreateMonsterDto): Promise<any>;
    delete(id: string): Promise<any>;
}
