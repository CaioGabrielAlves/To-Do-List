const mongoose = require('mongoose');

const connectToDb = () =>   {
    mongoose.connect(
        'mongodb+srv://root:admin@cluster0.fb4iv.mongodb.net/'
    ).then(() => console.log('MongoDB Atlas CONECTADO!'))
    .catch((err) => console.log(err));
};
module.exports = connectToDb;