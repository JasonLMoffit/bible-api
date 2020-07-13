const fs = require("fs");
const log = console.log;

// const data = fs.readFileSync("baruch_2.json");

const getData = (chp) => {
  let rawdata = fs.readFileSync("Baruch/baruch_2.json");
  let data = JSON.parse(rawdata);

  const { verses } = data;
  verses.map((item) => {
    if (item.chapter === chp) {
      log(`${item.verse} ${item.text}`);
    }
  });
};

// const test = getData(1);
//log(test);

let rawdata = fs.readFileSync("Leviticus/Leviticus_1.json");
let scripts = JSON.parse(rawdata);

const { verses } = scripts;

log(verses.map((item) => item.text));
