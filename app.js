const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
var items = ["Eat", "sleep", "repeat"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  var today = new Date();
  var cday = today.getDay();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);

  // switch (cday) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;

  //   default:
  //     console.log("Error meow" + cday);
  //     break;
  // }
  res.render("list", { kindOfday: day, list: items });
  // res.end();
});
app.post("/", function (req, res) {
  var item = req.body.newitem;
  items.push(item);
  res.redirect("/");
});
app.listen(port, function () {
  console.log("server started");
});
