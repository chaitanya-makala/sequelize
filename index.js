const express = require("express");
const app = express();
app.use(express.json());

const { sequelize } = require("./config/config");
const { orderRouter } = require("./routes/orderRoutes");
const { userRouter } = require("./routes/userRouter");

app.use("/", userRouter);
app.use("/orders", orderRouter);

app.listen(3000, async () => {
  try {
    await sequelize.sync();
    console.log("Connected to DB");
  } catch (e) {
    console.log(e);
  }
});
