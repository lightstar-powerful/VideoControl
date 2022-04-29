const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const videoDB = require("./server/model");
videoDB.sequelize.sync();

require("./server/route/routes")(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`VideoServer is running on port ${PORT}.`);
});
