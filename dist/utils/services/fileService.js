"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const mongoModelService_1 = require("../models/origin/mongoModelService");
const mysqlModelService_1 = require("../models/origin/mysqlModelService");
const prismaModelService_1 = require("../models/prisma/prismaModelService");
const input = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const mongoModels = new mongoModelService_1.MongoModels();
const mysqlModels = new mysqlModelService_1.MySqlModels();
const prismaModels = new prismaModelService_1.PrismaModels();
const fileService = () => {
    console.log("Add new model \n");
    console.log(`
    [1] Prisma Name \n
    [2] Mongo Name | Deleted \n
    [3] MySql Name | Deleted \n
  `);
    input.on("line", (line) => {
        let file = line.slice(2);
        let num = line[0];
        switch (num) {
            case "1":
                createModel(file, prismaModels);
                break;
            case "2":
                createModel(file, mongoModels);
                break;
            case "3":
                createModel(file, mysqlModels);
                break;
            default:
                process.exit(0);
        }
    });
};
const createModel = (file, model) => {
    fs_1.default.mkdir(`./src/${file}/`, () => __awaiter(void 0, void 0, void 0, function* () {
        if (model == mongoModels) {
            fs_1.default.writeFile(`./src/${file}/${file}Model.ts`, yield model.model(file), () => { });
        }
        fs_1.default.writeFile(`./src/${file}/${file}Router.ts`, yield model.route(file), () => { });
        fs_1.default.writeFile(`./src/${file}/${file}Controller.ts`, yield model.controller(file), () => {
            process.exit(0);
        });
    }));
};
fileService();
//# sourceMappingURL=fileService.js.map