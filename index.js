const express = require('express')
const { WebhookClient } = require('dialogflow-fulfillment')
const controller = require('./controllers')

const app = express()
app.use(express.json())


const PORT =  process.env.PORT || '3000';

app.get('/', (_req, res) => {
  res.status(200).json({mesage: "Server Is Working"});
});

app.get(
  '/data',
  controller.listData
);

app.get(
  '/data/:id',
  controller.listDataId
);

app.post('/data',
  controller.updateDataId
);

app.post('/webhook',
  controller.updateData
);

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));
