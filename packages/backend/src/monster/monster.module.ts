import { Module } from '@nestjs/common';
import { MonsterController } from './monster.controller';
import { MonsterService } from './monster.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MonsterController],
  providers: [MonsterService, PrismaService]
})
export class MonsterModule {}
