import { Router } from "express";

import createMiddleware from "../middlewares/create.middleware.js";
import readMiddleware from "../middlewares/read.middleware.js";
import deleteMiddleware from "../middlewares/delete.middleware.js";
import updateMiddleware from "../middlewares/delete.middleware.js";

import taskCreate from "../controllers/createTask.js";
import taskDelete from "../controllers/deleteTask.js";
import taskUpdate from "../controllers/updateTask.js";
import taskRead from "../controllers/readTask.js";
// import logBook from "../controllers/logBook.js";
const router = Router();

router.post("/create", createMiddleware, taskCreate);
router.delete("/delete", deleteMiddleware, taskDelete);
router.put("/update", updateMiddleware, taskUpdate);
router.get("/read", readMiddleware, taskRead);

export default router;
