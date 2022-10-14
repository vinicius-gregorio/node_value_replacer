var fs = require("fs");

const REPLACE_REGEX = /(?:(^|[^\[])\[\[)([^\]]*?)(?:\]\](?:($|[^\]])))/g;
const SOURCE_FILE = "data.md";
const OUTPUT_FILE = "output.md";

fs.readFile(SOURCE_FILE, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(REPLACE_REGEX, function (value) {
    return increaseZero(value);
  });
  data.replace();

  fs.writeFile(OUTPUT_FILE, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

function increaseZero(value) {
  const buildNumeric =
    "00" +
    value[6] +
    value[7] +
    "00" +
    value[8] +
    value[9] +
    "00" +
    value[10] +
    value[11];

  const buildCategory = value.substring(3, 6);

  const buildString = ` [[${buildCategory}${buildNumeric}]]`;
  return buildString;
}
