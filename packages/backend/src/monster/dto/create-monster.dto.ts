import { IsOptional, IsString, IsNumber, IsJSON } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

type MonsterType = {
    species:string,
    subSpecies:string
}
export class CreateMonsterDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  level?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  image?: string;

  @IsOptional()
  @ApiProperty({
    type: 'object',
    example: {
      species: 'string',
      subSpecies: 'string'
    }
  })
  type?: MonsterType;
}