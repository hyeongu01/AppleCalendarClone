const PORT = 3000;

import express from "express";
const app = express();

app.use(express.json());

// router connect
import userRouter from "./routes/user.router";

app.use("/users", userRouter);


// health-check
app.get("/health", (req, res) => {
  res.json({message: "server is running!"});
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`)
})