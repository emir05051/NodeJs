import { list } from "../controllers/createTask.js";

export default (req, res, next) => {
  try {
    const { name, description } = req.body;
    req.body.isFinished = false;
    const idx = list.findIndex((el) => el.name === name);

    if (!name) {
      throw new Error(res.status(401).json({ message: "Нет заголовка" }));
    }
    if (!description) {
      throw new Error(res.status(401).json({ message: "Нет описания" }));
    }
    if (idx !== -1) {
      throw new Error(
        res.status(401).json({ message: "Такое задание уже есть" })
      );
    }
    next();
  } catch (e) {
    console.log(e);
  }
};
