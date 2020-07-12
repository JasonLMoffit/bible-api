const fs = require("fs");
const log = console.log;

// const data = fs.readFileSync("baruch_2.json");

const getData = (chp) => {
  let rawdata = fs.readFileSync("baruch_2.json");
  let data = JSON.parse(rawdata);

  const { verses } = data;
  verses.map((item) => {
    if (item.chapter === chp) {
      log(`${item.verse} ${item.text}`);
    }
  });
};

const test = getData(1);
log(test);
