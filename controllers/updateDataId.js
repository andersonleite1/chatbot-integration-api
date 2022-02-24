const { readFile, writeFile } = require('fs/promises');

const updateDataId = async (req, res, next) => {
  try {
    let { id } = req.body;
    id = parseInt(id, 10);
    const datas = await readFile('./data.json', 'utf-8');
    const parsedDatas = JSON.parse(datas);

    const dataInfo = parsedDatas.map((dt) => {
      if(id === 1 && id === dt.id) dt.moveFront = false;
      if(id === 2 && id === dt.id) dt.moveRight = false;
      if(id === 3 && id === dt.id) dt.moveLeft = false;
      if(id === 4 && id === dt.id) dt.moveBack = false;
      return dt;
    });

    const stringDatas = JSON.stringify(dataInfo, null, 2);
    await writeFile('./data.json', stringDatas);
    return res.setHeader("Access-Control-Allow-Origin", "*").status(200).end();
  } catch (err) {
    next(err);
  }
};

module.exports = updateDataId;
