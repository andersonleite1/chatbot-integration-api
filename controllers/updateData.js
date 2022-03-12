const { readFile, writeFile } = require('fs/promises');

const updateData = async (req, res, next) => {
  try {
    const { displayName } = req.body.queryResult.intent;
    
    let id = 0;
    switch (displayName) {
      case 'moveFront':
        id = 1;
        break;
      case 'moveRight':
        id = 2;
        break;
      case 'moveLeft':
        id = 3;
        break;
      case 'moveBack':
        id = 4;
        break;
      case 'entrance':
        id = 5;
        break;
      case 'museumGuide':
        id = 6;
        break;
      case 'infographicOne':
        id = 7;
        break;
      case 'infographicTwo':
        id = 8;
        break;
      case 'standsOne':
        id = 9;
        break;
      case 'standsTwo':
        id = 10;
        break;
      case 'bathroom':
        id = 11;
        break;
      case 'museumCenter':
        id = 12;
        break;
      case 'reception':
        id = 13;
        break;
      case 'comercialRoom':
        id = 14;
        break;
      case 'library':
      id = 15;
      break;
      default:
        break;
    }

    const datas = await readFile('./data.json', 'utf-8');
    const parsedDatas = JSON.parse(datas);

    const dataInfo = parsedDatas.map((dt) => {
      if(id === 1 && id === dt.id) dt.moveFront = true;
      if(id === 2 && id === dt.id) dt.moveRight = true;
      if(id === 3 && id === dt.id) dt.moveLeft = true;
      if(id === 4 && id === dt.id) dt.moveBack = true;
      if(id === 5 && id === dt.id) dt.entrance = true;
      if(id === 6 && id === dt.id) dt.museumGuide = true;
      if(id === 7 && id === dt.id) dt.infographicOne = true;
      if(id === 8 && id === dt.id) dt.infographicTwo = true;
      if(id === 9 && id === dt.id) dt.standsOne = true;
      if(id === 10 && id === dt.id) dt.standsTwo = true;
      if(id === 11 && id === dt.id) dt.bathroom = true;
      if(id === 12 && id === dt.id) dt.museumCenter = true;
      return dt;
    });
    
    const stringDatas = JSON.stringify(dataInfo, null, 2);

    await writeFile('./data.json', stringDatas);
    return res.setHeader("Access-Control-Allow-Origin", "*").status(200).end();
  } catch (err) {
    next(err);
  }
};

module.exports = updateData;
