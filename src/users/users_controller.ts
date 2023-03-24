import prisma from "../../lib/config/prisma";
import { Request, Response } from "express";

interface IUserMethod {
  email: string;
  password: string;
}

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    res.send({ users });
  } catch (error: any) {
    return { error };
  }
}

export async function createUsers({ email, password }: IUserMethod) {
  try {
    // const user = await prisma.user.create({
    //   data: {
    //     email,
    //     password,
    //   },
    // });
    // if (!user) {
    //   throw new Error("Error creating user");
    // }
    return { user: "Hola POST" };
  } catch (error: any) {
    return { error };
  }
}
