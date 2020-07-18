const lg = console.log;
const fs = require("fs");

const recursive = require("recursive-readdir");
//! /E/Projects/bible/WordOfEl

recursive("C:/Users/jmoff/Projects/bible/WordOfEl", function (err, files) {
  const sortedFiles = files.sort((x, y) => x - y);

  sortedFiles.map((file) => {
    const dir = file.replace(/\\/g, "/");
    const path = dir.split(/\\/).splice(0, 4).join("/");
    const regy = /[0-9]{2}/;
    const list = file.split("\\");
    const chapter = path.match(/[0-9]{1,2}/);
    const bookRaw = path.match(/\w+(?<=_)/gi);
    const book = bookRaw.toString().replace(/\_/, "");
    const dynamicFile = list[list.length - 1].split("_").pop();
    dynamicFile.replace(/[0-9]{1,2}/i, chapter);
    let readyFile;
    readyFile = file.replace(/dynamicFile/i, `chapter.json`);
    const formatText = fs.readFile(readyFile, (err, data) => {
      if (err) throw err;
      const newFile = data
        .toString()
        .replace(/"/g, "'")
        .replace(
          /^\w+\s[0-9]{1,2}:/,
          `{"book": "${book}", "chapter": ${chapter}, "version": "ISV", "verses":[{"book": "${book}","chapter":${chapter},"verse":`
        )
        .replace(/-[0-9]{2}/g, ', "text": "')
        .replace(
          /\((?=[0-9])/g,
          `{"book": "${book}","chapter":${chapter},"verse":`
        )
        .replace(/(?<=[0-9])\)\s+/gi, ', "text":"')
        .replace(/(?<=\s)\{/g, "{")
        .replace(/\s\{/g, '"},{')
        .replace(/\s\s/g, " ")
        .replace(/"text":\s\w/g, '"text": "')
        .replace(/\:/g, ": ")
        .replace(/$(?!\"\})/i, '"}]}')
        .replace(/""/g, '"')
        .replace(/\s+/g, "");
      fs.writeFile(`${path}/`, newFile, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("File saved successfully!");
      });
    });
  });
});
