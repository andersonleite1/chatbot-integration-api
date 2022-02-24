const { readFile } = require('fs/promises');

const listData = async (_req, res, next) => {
  try {
    const data = await readFile('./data.json', 'utf-8');
    const parsedData = JSON.parse(data);

    if (parsedData.length < 1) return res.status(200).send([]);
    return res.setHeader("Access-Control-Allow-Origin", "*").status(200).json(parsedData);
  } catch (err) {
    return next(err);
  }
};

module.exports = listData;