const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/simple App")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function greeting(message) {
  return message;
}

console.log(greeting("Hello Jason, welcome to my Chess game"));
