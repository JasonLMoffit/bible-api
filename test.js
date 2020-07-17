const lg = console.log;
const fs = require("fs");
const script =
  "Gen 14:1-24  At the time when Amraphel was king of Shinar, Arioch was king of Ellasar, Chedorlaomer was king of Elam, and Tidal was king of the Goiim,  (2)  they engaged in war against King Bera of Sodom, King Birsha of Gomorrah, King Shinab of Admah, King Shemeber of Zeboiim, along with the king of Bela (which was also known as Zoar).  (3)  All of this latter group of kings allied together in the Valley of Siddim (that is, the Salt Sea).  (4)  They were subject to Chedorlaomer for twelve years, but they rebelled in the thirteenth year.  (5)  In the fourteenth year, Chedorlaomer and the kings with him came and defeated the Rephaim in Ashteroth-karnaim, the Zuzites in Ham, the Emites in Shaveh-kiriathaim,  (6)  and the Horites in the hill country of Seir, near El-paran by the desert.  (7)  Next they turned back and came to En-mishpat (which was also known as Kadesh) and conquered all the territory of the Amalekites, along with the Amorites who lived in Hazazon-tamar.  (8)  Then the kings of Sodom, Gomorrah, Admah, Zeboiim, and Bela (which was also known as Zoar) prepared for battle in the Valley of Siddim  (9)  against King Chedorlaomer of Elam, King Tidal of Goiim, King Amraphel of Shinar, and King Arioch of Ellasar—four kings against five.  (10)  Now the Valley of Siddim was full of tar pits, so when the kings of Sodom and Gomorrah fled, some of their people fell into them, while the rest fled to the hill country.  (11)  The conquerors captured all the possessions of Sodom and Gomorrah, including their entire food supply, and then left.  (12)  They also took Abram's nephew Lot and his possessions, since he was living in Sodom.  (13)  Someone escaped, arrived, and reported what had happened to Abram the Hebrew, who was living by the oaks belonging to Mamre the Amorite, whose brothers Eshcol and Aner were allied with Abram.  (14)  When Abram heard that his nephew had been taken prisoner, he gathered together 318 of his trained men, who had been born in his household, and they went out in pursuit as far as Dan.  (15)  During the night, Abram and his servants divided his forces, conquered his enemies, and pursued them as far as Hobah, north of Damascus.  (16)  He recovered all the goods and brought back his nephew Lot, together with his possessions, the women, and the other people.  (17)  After Abram's return from defeating Chedorlaomer and the kings who were with them, the king of Sodom went out to meet with him in the Shaveh Valley (that is, the King's Valley).  (18)  King Melchizedek of Salem brought out bread and wine, since he was serving as the priest of God Most High.  (19)  Melchizedek blessed Abram and said, 'Abram is blessed by God Most High, Creator of heaven and earth,  (20)  and blessed be God Most High, who has delivered your enemies into your control.' Then Abram gave him a tenth of everything.  (21)  The king of Sodom told Abram, 'Return the people to me, and you take the possessions for yourself.'  (22)  But Abram answered the king of Sodom, 'I have made an oath to the LORD God Most High, Creator of heaven and earth,  (23)  that I will not take a thread or a sandal strap or anything that belongs to you, so you won't be able to say, 'I made Abram rich.'  (24)  I will take nothing except what my warriors have eaten. But as for what belongs to the men who were allied with me, including Aner, Eshcol, and Mamre, let them take their share.'";

// const formattedText = script
//   .replace(/\n(?<!"})/g, "'")
//   .replace(
//     /^\w+\s[0-9]{1,2}:/,
//     '{"book": "Genesis", "chapter": 14, "version": "ISV", "verses":[{"book": "Genesis","chapter":10,"verse":'
//   )
//   .replace(/-[0-9]{2}/g, ', "text": "')
//   .replace(/\((?=[0-9])/g, '{"book": "Genesis","chapter":10,"verse":')
//   .replace(/(?<=[0-9])\)\s+/gi, ', "text":"')
//   .replace(/(?<=\s)\{/g, "{")
//   .replace(/\s\{/g, '"},{')
//   .replace(/\s\s/g, " ")
//   .replace(/"text":\s\w/g, '"text": "')
//   .replace(/\:/g, ": ")
//   .replace(/$(?!\"\})/i, '"}]}');

// const book = JSON.parse(formattedText).book;
// const chapter = JSON.parse(formattedText).chapter;
// lg(chapter);
// JSON.parse(formattedText).verses.map((verse) => (verse.chapter = chapter));
// const dynamicText = formattedText;

const recursive = require("recursive-readdir");

recursive("E:/Projects/bible-api/testingProg", function (err, files) {
  const sortedFiles = files.sort((x, y) => x - y);

  sortedFiles.map((file) => {
    const dir = file.replace(/\\/g, "/");
    const path = dir.split(/\\/).splice(0, 4).join("/");
    const regy = /[0-9]{2}/;
    const bkRegy = /[a-z]{3}/i;
    const chapter = file.toString().match(regy);
    const book = file.toString().match(bkRegy);
    const list = file.split("\\");
    const dynamicFile = list[list.length - 1].split("_").pop();
    dynamicFile.replace(/[0-9]{1,2}/i, chapter);
    let readyFile;
    readyFile = file.replace(/dynamicFile/i, `chapter.json`);
    const formatText = fs.readFile(readyFile, (err, data) => {
      if (err) throw err;

      const newFile = data
        .toString()
        .replace(/\n(?<!"})/g, "'")
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
        .replace(/$(?!\"\})/i, '"}]}');
      fs.writeFile(`${path}/`, newFile, function (err) {
        if (err) {
          return console.log(err);
        }
        lg(newFile);
        console.log("File saved successfully!");
      });
    });
  });
});

// fs.writeFile(
//   Genesis/Genesis_chapter.json,
//   dynamicText.toString(),
//   function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("File saved successfully!");
//   }
// );
