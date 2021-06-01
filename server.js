const express = require('express');
const cors = require('cors');

const characterData = require('./controller/Characters.controller');
const dataCrudControler = require('./controller/dataCrud.Controler')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());


// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});
app.get('/character', characterData.getDataOfCharacter);
app.post('/character/favorits', dataCrudControler.addfavorites);
app.get('/character/favorits', dataCrudControler.getfavorites);
app.delete('/character/favorits/:slug', dataCrudControler.deleteFromFavorites);
app.put('/character/favorits/:slug', dataCrudControler.UpdateFavorites);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
