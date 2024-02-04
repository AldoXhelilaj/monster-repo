type MonsterType = {
    species: string;
    subSpecies: string;
};
export declare class CreateMonsterDto {
    name?: string;
    level?: number;
    image?: string;
    type?: MonsterType;
}
export {};
