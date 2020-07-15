const lg = console.log;
const script =
  "Gen 10:1-32  These are the records of Noah's sons, Shem, Ham, and Japheth, to whom descendants were born after the flood.  (2)  Japheth's descendants included Gomer, Magog, Madai, Javan, Tubal, Meshech, and Tiras.  (3)  Gomer's descendants included Ashkenaz, Riphath, and Togarmah.  (4)  Javan's descendants included Elisha, Tarshish, Kittim, and Dodanim,  (5)  from whom the coastal peoples spread into their own lands and nations, each with their own language and family groups.  (6)  Ham's descendants included Cush, Egypt, Put, and Canaan.  (7)  Cush's descendants included Seba, Havilah, Sabtah, Raamah, and Sabteca. Raamah's descendants included Sheba and Dedan.  (8)  Cush fathered Nimrod, who became the first fearless leader throughout the land.  (9)  He became a fearless hunter in defiance of the LORD. That is why it is said, 'Like Nimrod, a fearless hunter in defiance of the LORD.'  (10)  His kingdom began in the region of Shinar with the cities of Babylon, Erech, Akkad, and Calneh.  (11)  From there he went north to Assyria and built Nineveh, Rehoboth-ir, and Calah,  (12)  along with Resen, which was located between Nineveh and the great city of Calah.  (13)  Egypt fathered the Ludites, the Anamites, the Lehabites, the Naphtuhites,  (14)  the Pathrusites, the Casluhites (from which came the Philistines), and the Caphtorites.  (15)  Canaan fathered Sidon his firstborn, along with the Hittites,  (16)  the Jebusites, the Amorites, the Girgashites,  (17)  the Hivites, the Arkites, the Sinites,  (18)  the Arvadites, the Zemarites, and the Hamathites. Later, the Canaanite families were widely scattered.  (19)  The Canaanite border extended south from Sidon toward Gerar as far as Gaza, and east toward Sodom, Gomorrah, Admah, and Zeboiim, as far as Lasha.  (20)  These are Ham's descendants, listed by their families, each with their own lands, language, and family groups.  (21)  Shem, Japheth's older brother, also had descendants. Shem was the father of the descendants of Eber.  (22)  Shem's sons included Elam, Asshur, Arpachshad, Lud, and Aram.  (23)  Aram's descendants included Uz, Hul, Gether, and Mash.  (24)  Arpachshad fathered Cainan, Cainan fathered Shelah, and Shelah fathered Eber.  (25)  To Eber were born two sons. One was named Peleg, because the earth was divided during his lifetime. His brother was named Joktan.  (26)  Joktan fathered Almodad, Sheleph, Hazarmaveth, Jerah,  (27)  Hadoram, Uzal, Diklah,  (28)  Obal, Abimael, Sheba,  (29)  Ophir, Havilah, and Jobab. All these were Joktan's descendants.  (30)  Their settlements extended from Mesha towards Sephar, the eastern hill country.  (31)  These are Shem's descendants, listed by their families, each with their own lands, language, and family groups.  (32)  These are the families of Noah's sons, according to their records, by their nations. From these people, the nations on the earth spread out after the flood.";
const test = script.replace(/^\w+\s[0-9]{2}:/, "(");
const test2 = test.replace(/-[0-9]{2}/, ")");
//console.log(test2);
const stripingDoubleQuotes = test2.replace(/(?<!\w)'/g, "'");
const newLines = stripingDoubleQuotes.replace(
  /\(/g,
  '{"book": "Genesis","chapter":10,"verse":'
);
const nextStep = newLines.replace(/\)/g, ',"'),
  step3 = nextStep.replace(/\s\s\{/g, " {"),
  step4 = step3.replace(/\s\s/g, 'text":'),
  step5 = step4.replace(/:\s\s/g, ":"),
  step6 = step5.replace(/"text"\:/g, '"text":"'),
  step7 = step6.replace(/\s\{/g, '"}, {'),
  step8 = step7.replace(
    /{"book": "Genesis","chapter":10,"verse":/,
    '{"verses":[{"book": "Genesis","chapter":10,"verse":'
  ),
  step9 = step8.replace(/\.$/, '."}]}'),
  step10 = step9.replace(/\,\s/g, ","),
  step11 = step10.replace(/\s\s/g, "").trim();

lg(step11);
// const regex = /^\w+\s[0-9]{2}:/;
// const trial = regex.exec(script);
// trial.splice(trial[0], " ");
// console.log(trial);
