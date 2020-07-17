// const lg = console.log;
// const fs = require("fs");
// const recursive = require("recursive-readdir");

// recursive("E:/Projects/bible-api/WordOfEl", function (err, files) {
//   // `files` is an array of file paths
//   console.table(files);
// });

// const files = () =>
//   fs.readdir("E:/Projects/bible-api/WordOfEl", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     data.map((dir) => {
//       if (fs.lstatSync(dir).isDirectory()) {
//         lg(dir);
//         files(`${__dirname}/WordOfEl/${dir}`);
//       } else if (fs.lstatSync(dir).isFile()) {
//         fs.readFile(dir, (err, data) => {
//           if (err) throw err;
//           console.log(data.toString());
//         });
//       }
//     });
//   });
// files();

// const test = fs.readFile("Genesis/Genesis_15.json", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
// lg(test);
