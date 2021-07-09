// import { list } from "./createTask.js";
// import path from "path";
// import { readFileSync, writeFileSync } from "fs";

// export default (req, res) => {
//   const { log } = req.body;
//   if (log === true) {
//     const filename = path.join(path.resolve(), "loggedUsers.txt");
//     writeFileSync(filename, "\n" + list, { flag: "a" });
//   }
//   res.status(200).json({ message: "Начинаю запись" });
// };
