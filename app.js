const serverless = require('serverless-http');

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.send({ success:true,message:"Hii ahsan it's working update 2.0" });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});
app.listen(3000, () => console.log(`Listening on: 3000 and ahsan is best`));


module.exports.handler = serverless(app);


