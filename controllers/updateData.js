const { readFile, writeFile } = require('fs/promises');

const updateData = async (req, res, next) => {
  try {
    const { displayName } = req.body.queryResult.intent;
    console.log(displayName);
    
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
      default:
        break;
    }

    const datas = await readFile('./data.json', 'utf-8');
    const parsedDatas = JSON.parse(datas);
    console.log(id);
    console.log(datas);

    const dataInfo = parsedDatas.map((dt) => {
      if(id === 1 && id === dt.id) dt.moveFront = true;
      if(id === 2 && id === dt.id) dt.moveRight = true;
      if(id === 3 && id === dt.id) dt.moveLeft = true;
      if(id === 4 && id === dt.id) dt.moveBack = true;
      return dt;
    });

    console.log(dataInfo);
    
    // if (dataInfo === -1) return res.status(404).json({ message: 'Data not found' });
    // const updatedData = { id, "moveRight": true };

    // parsedDatas.splice(dataInfo, 1, updatedData);
    
    const stringDatas = JSON.stringify(dataInfo, null, 2);
    // console.log(updatedData);
    // console.log('\n\n Dados: ', stringDatas);
    await writeFile('./data.json', stringDatas);
    return res.setHeader("Access-Control-Allow-Origin", "*").status(200).end();
  } catch (err) {
    next(err);
  }
};

module.exports = updateData;
