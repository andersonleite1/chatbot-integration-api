const { readFile } = require('fs/promises');

const listDataId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const datas = await readFile('./data.json', 'utf-8');
    const parsedDatas = JSON.parse(datas);
    const data = parsedDatas.find((d) => d.id === parseInt(id, 10));

    if (!data) {
      return res.status(404).json(
        {
          message: 'Data not found', 
        },
      ); 
    }
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

module.exports = listDataId;
