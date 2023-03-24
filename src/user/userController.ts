import prisma from "../../lib/config/prisma";
import { Request, Response } from "express";

export async function getUser(req: Request, res: Response) {
  try {
    const response = await prisma.user.findMany();
    res.status(200).send({ user: response });
  } catch (error: any) {
    res.status(400).send({ error: "error GET" });
  }
}

export async function postUser(req: Request, res: Response) {
  try {
    const response = await prisma.user.create({
      data: req.body,
    });
    res.status(200).send({ user: response });
  } catch (error: any) {
    res.status(400).send({ error: "error POST" });
  }
}
export async function putUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await prisma.user.update({
      where: { id },
      data: req.body,
    });
    res.status(200).send({ user: response });
  } catch (error: any) {
    res.status(400).send({ error: "error PUT" });
  }
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await prisma.user.delete({
      where: { id },
    });
    res.status(200).send({ user: response });
  } catch (error: any) {
    res.status(400).send({ error: "error DELETE" });
  }
}
