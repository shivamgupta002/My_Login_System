const { collection } = require("../Model/Model");

exports.loginRoute = async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.send("exist");
    } else {
      res.send("not");
    }
  } catch (e) {
    console.log("Not exist");
  }
};
exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const data = {
    name: name,
    email: email,
    password: password,
  };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.send("exist");
    } else {
      res.send("not");
      await collection.insertMany([data]);
    }
  } catch (e) {
    console.log("Not exist");
  }
};
