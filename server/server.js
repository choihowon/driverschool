const express = require('express');
const app = express();
const cors = require('cors');
const session = require("express-session");
const bodyParser = require('body-parser');
const port =process.env.PORT || 3002;

const connect = require("./schemas");

connect();

const corsOptions = {
    origin: true,
    credentials: true
};

app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: "howon",
      cookie: {
        httpOnly: true,
        secure: false
      }
    })
  );
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/board", require("./routes/boardRouter.js"));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})