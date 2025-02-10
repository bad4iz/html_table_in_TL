const {

  VALUE_STR_NUM,
  HEADER_STR_NUM,
} = require("./const");
const fs = require("fs");
const getValuesArr = require("./getValuesArr");

fs.readFile("./index.html", "utf-8", (err, html) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const valuesArr = getValuesArr(html);
  // writeFile(valuesArr);

  const valueWithChildren = gatherChildren(valuesArr);

  writeFile(valueWithChildren);
});


function writeFile(data) {
  const jsonStructure = JSON.stringify(data, null, 2);

  fs.writeFile(
    "./output.js",
    `export const tableStructure = ${jsonStructure};`,
    "utf-8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("JSON structure saved to output.js");
    },
  );
}

function gatherChildren(data) {
  if (!data.length) return [];


  const answer = [];
  // for (let i = 0; i < data.length; i++) {


  const row = data[0];


  if (row.length === 1) {
    if (!row[0].Header) {
      return gatherChildren(data.slice(1))
    }
    if (data.length === 1) {
      row[0].dataLe = data.length
      return [row[0]]
    }
    row[0].columns = gatherChildren(data.slice(1))
    return [row[0]]


  };

  for (let j = 0; j < row.length; j++) {
    const cell = row[j];




    if (!cell.Header) {
      continue
    }


    if (cell.colSpan) {
      const children = [];
      for (let ix = 1; ix < data.length; ix++) {

        if (!cell.Header) {
          continue
        }

        children.push(data[ix].slice(j, j + cell.colSpan));
      }

      // cell.arst = children

      if (children.length) {
        cell.columns = gatherChildren(children);
      }
    }

    answer.push(cell);
    // }
  }
  return answer;
}
