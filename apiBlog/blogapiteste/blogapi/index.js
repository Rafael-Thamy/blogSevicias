const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
/* const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
 */
/* const port = process.env.PORT; */

process.on("uncaughtException", (error, origin) => {
  console.log("-----Uncaught exception-----");
  console.log(error);
  console.log("--exception origin");
  console.log(origin);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("-----Uunhandled Rejection at-----");
  console.log(promise);
  console.log("--reason");
  console.log(reason);
});

dotenv.config(); //this is for the environment configuration
app.use(express.json()); //this is for json format response
app.use("/images", express.static(path.join(__dirname, "/images"))); // this is for using the assets in nodeJS.
//using the images folder by calling the static method, joining a relative path with _dirname and the folder name

//this is mongoose that will conenect to database and all the data will be brougth from it

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /* useCreateIndex: true,
    useFindAndModify:true */
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

/* app.post("payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Book",
      payment_method: id,
      confirm: true,
    });
    console.log("payment", payment);
    res.json({
      message: "payment succesful",
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    res.json({
      message: "payment failed",
      success: false,
    });
  }
});
 */
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});

//nesse caso devemos procurar no arquivo de configuração se o cors está setado de outra forma

//996485925