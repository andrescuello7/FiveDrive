import { Request, Response } from "express";
import { deployGitHub } from "./deployService";

export async function postDeploy(req: Request, res: Response) {
  const { github, name } = req.body;
  try {
    const response = deployGitHub(github, name);
    res.status(200).send({ deploy: response });
  } catch (error: any) {
    res.status(400).send({ error: "error POST" });
  }
}
