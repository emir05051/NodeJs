import { list } from "./createTask.js";

export default (req, res) => {
  const { name } = req.body;
  const idx = list.findIndex((el) => el.name === name);

  if (name == "all") {
    return res.json({
      message: list,
    });
  }
  if (idx === -1) {
    return res.status(401).json({ message: "Такого задания нет" });
  }
  if (idx !== -1) {
    return res.json({
      message: `Заголовок ${list[idx].name} с описанием ${
        list[idx].description
      } ${list[idx].isFinished ? "выполнен" : "не выполнен"}`,
    });
  }
};
