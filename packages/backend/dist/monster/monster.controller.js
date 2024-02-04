"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterController = void 0;
const common_1 = require("@nestjs/common");
const monster_service_1 = require("./monster.service");
const create_monster_dto_1 = require("./dto/create-monster.dto");
let MonsterController = class MonsterController {
    constructor(monsterService) {
        this.monsterService = monsterService;
    }
    async findAll() {
        return this.monsterService.findAll();
    }
    async findOne(id) {
        return this.monsterService.findOne(id);
    }
    async create(data) {
        return this.monsterService.create(data);
    }
    async delete(id) {
        return this.monsterService.delete(id);
    }
};
exports.MonsterController = MonsterController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MonsterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MonsterController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_monster_dto_1.CreateMonsterDto]),
    __metadata("design:returntype", Promise)
], MonsterController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MonsterController.prototype, "delete", null);
exports.MonsterController = MonsterController = __decorate([
    (0, common_1.Controller)('monster'),
    __metadata("design:paramtypes", [monster_service_1.MonsterService])
], MonsterController);
//# sourceMappingURL=monster.controller.js.map