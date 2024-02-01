const fs = require("fs");

function myRead(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function myWrite(file, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(file, data, function (err) {
      if (err) reject(err);
      else {
        console.log("Saving the new file..");
        resolve();
      }
    });
  });
}
function removeSpaces(str) {
  let arr = str.split(" ");
  // console.log(arr)
  let ans = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      continue;
    } else {
      ans = ans + arr[i];
      ans = ans + " ";
    }
  }
  return ans;
}

fileName = "fa.txt";
myRead(fileName)
  .then(function (data) {
    removedSpaces_data = removeSpaces(data);
    console.log(removedSpaces_data);
    return myWrite(fileName, removedSpaces_data);
  })
  .then(function () {
    console.log("\nFile has been saved!");
  });
