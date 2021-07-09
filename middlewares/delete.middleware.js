import { list } from "../controllers/createTask.js";

export default (req, res, next) => {
  try {
    if (list.length == 0) {
      throw new Error(
        res.status(401).json({ message: "Вы не добавили ни единого задания" })
      );
    }
    next();
  } catch (e) {
    console.log(e);
  }
};
