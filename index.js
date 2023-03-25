
const schoolRoutes = require("./routes/schoolRoutes");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/v1/school", schoolRoutes);



app.listen(3001, () => {
  console.log("jpmc backed");
  console.log("running on 3001");
});
