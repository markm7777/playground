//import express from 'express';
const express = require('express');
const https = require('https');
const port = process.env.PORT || 5000;
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer();
const app = express();

app.use(bodyParser.raw());


// https server
https.createServer({
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt')
}, app).listen(port, () => console.log(`DragAndDropServer (https) listening on port ${port}`));

app.get('/', (req, res) => {
  res.send('DragAndDropServer!');
});

app.post('/upload',  upload.array('files', 12), (req, res) => {
//app.post('/upload',  upload.single('file'), (req, res) => {
  console.log('upload!');
  const files = req.files;
  const formData = req.body;

  files.map((file) => {
    fs.writeFileSync(`./UploadedFiles/${file.originalname}`, file.buffer);
  });
  res.send('true');
});


// app.listen(5000, () =>
//   console.log('DragAndDropServer listening on port 5000!'),
// );