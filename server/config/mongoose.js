const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/zbeltdb2', { useMongoClient: true });
mongoose.Promise = global.Promise;

const models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach((file) => {
    if(file.includes('.js')) {
        console.log(`*LOADING:: ${file}...`)
        require(`${models_path}/${file}`);
    }
});
