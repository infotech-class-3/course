//console.log("asasaas"); deneme dosya uzantilari dogru yazilmis mi? nerede? -> package.json'da -> start: node src/app.js
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
<<<<<<< Updated upstream

const usersRouters = require("./routes/usersRoutes.js");
const todosRoutes = require("./routes/todosRoutes.js");

=======
const usersRouters = require("./routes/usersRoutes.js");
>>>>>>> Stashed changes
const mongoose = require("mongoose");

const PORT = process.env.PORT;

const app = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



// db Congiguration Section
const db = process.env.MongoURI;
mongoose
    .connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('DB baglandi'))
    .catch((err) =>{ console.log(err)})

<<<<<<< Updated upstream

app.use('/users', usersRouters);
app.use('/todos', todosRoutes);
=======
app.use('/users', usersRouters);

>>>>>>> Stashed changes





app.listen(PORT, console.log(`server ${PORT}'unda is working`));