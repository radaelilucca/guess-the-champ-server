import { Router } from "express";
import { ChampionsController } from "../controllers";

const championsRoutes = Router();

championsRoutes.get("/champs", async (req, res) => {
  const champions = await ChampionsController.list();

  return res.json({ champions });
});

export { championsRoutes };
