const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const memoryStorage = multer.memoryStorage();
const upload = multer({storage: memoryStorage}).single('image');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', upload, (req, res) => {
    console.log(req.body, req.file.originalname, req.file.size);
    res.status(200).send('form submitted!!!');
})

app.listen('3000', () => console.log('server running on port 3000'));