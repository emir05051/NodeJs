import { list } from "./createTask.js";

export default (req, res) => {
  const { name } = req.body;

  const idx = list.findIndex((el) => el.name === name);
  if (idx !== -1) {
    list.splice(idx, 1);
    return res.json({
      message: "Удален",
    });
  }
  if (name == "all") {
    while (list.length != 0) {
      list.pop();
    }
    console.log(list);
    return res.json({
      message: "Удалено всё",
    });
  }
  return res.json({ message: "Нет такого элемента" });
};
