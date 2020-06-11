const express = require('express');
const app = express();
const cors = require('cors');
//const bodyParser = require('body-parser');
const session = require('express-session');
const port =process.env.PORT || 3002;
//스키마를 가져와서 쓰겠다.
const connect = require("../schemas")

//실행하겠다.
connect();

//cors 설정
const corsOptions = {
    origin: true,
    credentials: true
  };
//세션을 사용하기위해 필요
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

//app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', (req, res)=> res.json({username:'node.js연동확인'}));

app.use("/board", require("./routes/board"));

 app.listen(port, ()=>{
     console.log(`express is running on ${port}`);
 })
