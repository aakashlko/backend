const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT | 3001;

const mongoURL =
  "mongodb+srv://aakash:aakash2507@user.7elp7a6.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoutes);
