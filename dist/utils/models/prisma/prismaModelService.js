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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaModels = void 0;
class PrismaModels {
    route(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let fullName = file[0].toUpperCase() + file.slice(1);
            return yield `import { Router } from "express";
        import { post${fullName}, get${fullName}, put${fullName}, delete${fullName} } from "./${file}Controller";

        const router: Router = Router();

        router.get("/", get${fullName});
        router.post("/", post${fullName});
        router.put("/:id", put${fullName});
        router.delete("/:id", delete${fullName});

        export default router;`;
        });
    }
    controller(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let fullName = file[0].toUpperCase() + file.slice(1);
            return yield `import prisma from "../../config/prisma";
            import { Request, Response } from "express";
            
            export async function get${fullName}(req: Request, res: Response) {
              try {
                const response = await prisma.${file}.findMany();
                res.status(200).send({ ${file}: response });
              } catch (error: any) {
                res.status(400).send({ error: "error GET" });
              }
            }
            
            export async function post${fullName}(req: Request, res: Response) {
              try {
                const response = await prisma.${file}.create({
                  data: req.body,
                });
                res.status(200).send({ ${file}: response });
              } catch (error: any) {
                res.status(400).send({ error: "error POST" });
              }
            }
            export async function put${fullName}(req: Request, res: Response) {
              const { id } = req.params;
              try {
                const response = await prisma.${file}.update({
                  where: { id },
                  data: req.body,
                });
                res.status(200).send({ ${file}: response });
              } catch (error: any) {
                res.status(400).send({ error: "error PUT" });
              }
            }
            
            export async function delete${fullName}(req: Request, res: Response) {
              const { id } = req.params;
              try {
                const response = await prisma.${file}.delete({
                  where: { id },
                });
                res.status(200).send({ ${file}: response });
              } catch (error: any) {
                res.status(400).send({ error: "error DELETE" });
              }
            }`;
        });
    }
}
exports.PrismaModels = PrismaModels;
//# sourceMappingURL=prismaModelService.js.map