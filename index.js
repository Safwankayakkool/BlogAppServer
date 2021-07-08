const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

mongoose.connect(
  "mongodb+srv://BlogApp:safwanchpu@cluster0.y4ubm.mongodb.net/myapp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb connected");
});

app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);

data = {
  msg: "Welcome on DevStack Blog App development YouTube video series",
  info: "This is a root endpoint",
  Working: "Documentations of other endpoints will be release soon :)",
  request:
    "Hey if you did'nt subscribed my YouTube channle please subscribe it",
};

app.route("/").get((req, res) => res.json(data));

app.listen(port, "0.0.0.0", () =>
  console.log(`welcome your listinnig at port ${port}`)
);