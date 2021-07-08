  const express = require("express");
  const mongoose = require("mongoose");
  const port = process.env.PORT || 5000;
  const app = express();

//   mongoose.connect('mongodb+srv://BlogApp:safwanchpu@cluster0.y4ubm.mongodb.net/myapp?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     });

  const connection = mongoose.connection;

  connection.once("open", () => {
      console.log("Mongodb connected");
  });
  
  app.use(express.json());
  const userRoute = require("./routes/user");
  app.use("/user",userRoute);
 

  app.route("/").get((req,res)=>res.json("your first rest api"));

  app.listen(port, () => console.log(`your server started at port ${port}`));