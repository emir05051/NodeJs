export const list = [];

export default (req, res) => {
  const { name, description } = req.body;
  let { isFinished } = req.body;

  list.push({
    name,
    description,
    isFinished,
  });

  console.log(list);
  res.json({ message: "ok" });
};
