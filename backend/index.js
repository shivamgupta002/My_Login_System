const express = require("express");
const cors = require("cors");

const dbConnect = require("./dbConnect");
const { loginRoute, signUp } = require("./Routes/route");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ####################### Login System ################################################

app.post("/", loginRoute);
// ####################### SignUp System ################################################

app.post("/signUp", signUp);

app.listen(port, () => console.log(`Server Started at port ${port}!`));
