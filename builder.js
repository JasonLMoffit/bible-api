const fs = require("fs");
const log = console.log;

//const step_1 = RegExp(`/(()()/gi`);
const carReturn = RegExp(`\n`);

// const data = fs.readFileSync("baruch_2.json");

const getData = (chp) => {
  let rawdata = fs.readFileSync("Baruch/baruch_2.json");
  let data = rawdata;

  const { verses } = data;
  verses.map((item) => {
    if (item.chapter === chp) {
      log(`${item.verse} ${item.text}`);
    }
  });
};

// const test = getData(1);
//log(test);

let rawdata = fs.readFileSync("Leviticus/Leviticus_5.json");
let scripts = JSON.parse(rawdata);

const { verses } = scripts;
const test = verses.flatMap((item) => {
  const step_1 = item.toString().match(step_1).replace(carReturn);
});
log(test);

//const first_step = scripts.replace(step_1, /\r/);
