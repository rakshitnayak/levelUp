const fs = require("fs");

function writeToFile(file) {
  fs.writeFile(
    `${__dirname}/${file}`,
    "This is some new data added on to the file",
    function (err) {
      if (err) {
        throw err;
      }
      console.log("File Write happened");
      console.log("File has been saved!");
    }
  );
}

const fileName = "file.txt";

writeToFile(fileName);
