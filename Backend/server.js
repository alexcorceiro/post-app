const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const helmet = require('helmet');
const authRoute = require("./src/routes/auth");
const postRoute = require("./src/routes/post");
const usersRoute = require("./src/routes/users");

const app = express();
const port= 5000;
dotenv.config();

mongoose.connect(process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
        console.log('base de donnée connecter')
    });

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(authRoute);
app.use(postRoute);
app.use(usersRoute);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});



app.listen(port, () => console.log(`server demarer sur http://localhost:${port}`))
