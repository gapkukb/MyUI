var fs = require("fs");
fs.readFile("./iconfont.svg", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\.\d+/g, "");

  fs.writeFile("./iconfont.svg", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
