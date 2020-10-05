const config = require('config');

const mongoose = require('mongoose');
mongoose.connect(config.get("uri"), {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;