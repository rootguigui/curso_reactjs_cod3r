const mongoose = require('mongoose');
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todoreact', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to database"))