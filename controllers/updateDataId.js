const { readFile, writeFile } = require('fs/promises');

const updateDataId = async (req, res, next) => {
  try {
    let { id } = req.params;
    id = parseInt(id, 10);
    const datas = await readFile('./data.json', 'utf-8');
    const parsedDatas = JSON.parse(datas);

    const dataInfo = parsedDatas.map((dt) => {
      if(id === 1 && id === dt.id) dt.moveFront = false;
      if(id === 2 && id === dt.id) dt.moveRight = false;
      if(id === 3 && id === dt.id) dt.moveLeft = false;
      if(id === 4 && id === dt.id) dt.moveBack = false;
      if(id === 5 && id === dt.id) dt.entrance = false;
      if(id === 6 && id === dt.id) dt.museumGuide = false;
      if(id === 7 && id === dt.id) dt.infographicOne = false;
      if(id === 8 && id === dt.id) dt.infographicTwo = false;
      if(id === 9 && id === dt.id) dt.standsOne = false;
      if(id === 10 && id === dt.id) dt.standsTwo = false;
      if(id === 11 && id === dt.id) dt.bathroom = false;
      if(id === 12 && id === dt.id) dt.museumCenter = false;
      if(id === 13 && id === dt.id) dt.reception = false;
      if(id === 14 && id === dt.id) dt.comercialRoom = false;
      if(id === 15 && id === dt.id) dt.library = false;
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
