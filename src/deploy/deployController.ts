import { Request, Response } from "express";
import { deployGitHub } from "./deployService";

export async function getDeploy(req: Request, res: Response) {
  try {
    res.status(200).send({ deploy: "Deploy listo" });
  } catch (error: any) {
    res.status(400).send({ error: "error POST" });
  }
}
export async function postDeploy(req: Request, res: Response) {
  const { github, name } = req.body;
  try {
    const response = deployGitHub(github, name);
    res.status(200).send({ deploy: response });
  } catch (error: any) {
    res.status(400).send({ error: "error POST" });
  }
}
