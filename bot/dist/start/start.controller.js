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
exports.StartController = void 0;
const common_1 = require("@nestjs/common");
const start_service_1 = require("./start.service");
const create_start_dto_1 = require("./dto/create-start.dto");
const update_start_dto_1 = require("./dto/update-start.dto");
let StartController = class StartController {
    constructor(startService) {
        this.startService = startService;
    }
    create(createStartDto) {
        console.log(`TOUCHED POST ROUTE`);
        return {
            message: "Some message",
            statusCode: 201
        };
    }
    findAll() {
        return this.startService.findAll();
    }
    findOne(id) {
        return this.startService.findOne(+id);
    }
    update(id, updateStartDto) {
        return this.startService.update(+id, updateStartDto);
    }
    remove(id) {
        return this.startService.remove(+id);
    }
};
exports.StartController = StartController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_start_dto_1.CreateStartDto]),
    __metadata("design:returntype", void 0)
], StartController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StartController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StartController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_start_dto_1.UpdateStartDto]),
    __metadata("design:returntype", void 0)
], StartController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StartController.prototype, "remove", null);
exports.StartController = StartController = __decorate([
    (0, common_1.Controller)('start'),
    __metadata("design:paramtypes", [start_service_1.StartService])
], StartController);
//# sourceMappingURL=start.controller.js.map