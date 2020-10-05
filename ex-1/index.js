const express = require("express");
const mongoose = require('./db');
const app = express();



app.listen(3000, () => {
    console.log("Listening....");
    const teste = mongoose.model('Cat', { name: String });

const kitty = new teste({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
})