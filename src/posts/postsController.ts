import prisma from "../../config/prisma";
import { Request, Response } from "express";

export async function getPosts(req: Request, res: Response) {
  try {
    const response = await prisma.posts.findMany();
    res.status(200).send({ posts: response });
  } catch (error: any) {
    res.status(400).send({ error: "error GET" });
  }
}

export async function postPosts(req: Request, res: Response) {
  try {
    const response = await prisma.posts.create({
      data: req.body,
    });
    res.status(200).send({ posts: response });
  } catch (error: any) {
    res.status(400).send({ error: "error POST" });
  }
}
export async function putPosts(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await prisma.posts.update({
      where: { id },
      data: req.body,
    });
    res.status(200).send({ posts: response });
  } catch (error: any) {
    res.status(400).send({ error: "error PUT" });
  }
}

export async function deletePosts(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await prisma.posts.delete({
      where: { id },
    });
    res.status(200).send({ posts: response });
  } catch (error: any) {
    res.status(400).send({ error: "error DELETE" });
  }
}
