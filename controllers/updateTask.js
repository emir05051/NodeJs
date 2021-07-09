import { list } from "./createTask.js";
const re_all = /\w*[^ ]/gm;
const re_matches = /^\s*(change)/gm;

export default (req, res) => {
  let { name, description } = req.body;
  let { isFinished } = req.body;

  // !!! ИЗМЕНЕНИЕ name
  // !!! НАДО в name прописать первым словом старое название, вторым - новое
  // !!! "`СТАРОЕ НАЗВАНИЕ` `НОВОЕ НАЗВАНИЕ`"
  // * пример "name":"change fasf ahe"
  const getAllNames = name.match(re_all);
  let varyName = name;

  if (getAllNames.length != 1) {
    name = getAllNames[0];
    varyName = getAllNames[1];
  }

  const idx = list.findIndex((el) => el.name === name);
  if (idx == -1) {
    return res.status(401).json({ message: "Not found" });
  }
  list[idx].name = varyName;

  // !!! ИЗМЕНЕНИЕ ОПИСАНИЯ
  // !!! В description пишем change и новое описание
  // *  "description": "change `НОВОЕ НАЗВАНИЕ`"
  const matchChange = description.match(re_matches);
  let varyDescription = description;
  if (matchChange.length === 1) {
    varyDescription = description.match(re_all)[1];
    list[idx].description = varyDescription;
  }
  console.log(list);
  // !!! ИЗМЕНЕНИЕ isFinished
  // !!! меняем isFinished на true или false
  // !!! Можно также написать:
  // * "isFinished" : "finished" | тоже самое что и true
  // * "isFinished" : "not finished" | тоже самое что и false
  // * "isFinished" : "notfinished"| тоже самое что и false

  if (typeof isFinished == "string") {
    isFinished = isFinished.toLowerCase();
  }

  if (isFinished == "finished") {
    isFinished = true;
  }

  if (isFinished == "not finished" || isFinished == "notfinished") {
    isFinished = false;
  }

  if (isFinished == true) {
    if (idx !== -1) {
      list[idx].isFinished = isFinished;
    }
    return res.json({
      message:
        name !== varyName
          ? `изменили ${name} на ${varyName}. Задача: ${varyName} изменена на выполнено`
          : `Задача: ${varyName} изменена на выполнено`,
    });
  }
  if (isFinished == false) {
    return res.json({
      message:
        name !== varyName
          ? `изменили ${name} на ${varyName}. Задача: ${varyName} изменена на не выполнено`
          : `Задача: ${varyName} изменена на не выполнено`,
    });
  }

  // return res.status(401).json({
  //   message:
  //     "isFinished может быть только true||false||finished||not finished||notfinished",
  // });
};
