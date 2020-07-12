const fs = require("fs");
const log = console.log;

// const data = fs.readFileSync("baruch_2.json");

let rawdata = fs.readFileSync("baruch_2.json");
let data = JSON.parse(rawdata);

const { verses } = data;

const getData = (chp) => {
  verses.map((item) => {
    if (item.chapter === chp) {
      log(`${item.verse} ${item.text}`);
    }
  });
};

const test = getData(5);
log(test);
