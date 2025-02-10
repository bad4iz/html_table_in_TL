/**
 * Строка со свойствами accessor
 */
const VALUE_STR_NUM = 7;

/**
 * Количество строк Header
 */
const HEADER_STR_NUM = 7;

const fs = require("fs");
const cheerio = require("cheerio");

try {
  fs.readFile("./index.html", "utf-8", (err, html) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    const valuesArr = getValuesArr(html);

    const jsonStructure = JSON.stringify(valuesArr, null, 2);

    fs.writeFile(
      "output.js",
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
  });
} catch (e) {
  console.log(e);
}

function getValuesArr(html) {
  const $ = cheerio.load(html);
  const table = $("table");

  const rows = table.find("tr");

  const values = rows.eq(VALUE_STR_NUM).find("td");

  const valuesArr = Array.from({ length: HEADER_STR_NUM }, (__, i) =>
    Array.from({ length: values.length }, (_, idx) => i + "_" + idx),
  );

  for (let iRow = 0; iRow < HEADER_STR_NUM; iRow++) {
    const tds = rows.eq(iRow).find("td");

    for (let i = 0, j = 0; i < tds.length; i++, j++) {
      const td = tds.eq(i);

      const colspan = $(td).attr("colspan");
      const rowspan = $(td).attr("rowspan");

      const columns = [
        {
          consta: values.eq(i).text().trim(),
        },
      ];

      while (valuesArr[iRow][j]?.cheked) {
        j++;
        console.log("j", j);
      }

      const coord = `${iRow + 1}_${j + 1}`;

      valuesArr[iRow][j] = {
        Header: $(td).text().trim(),
        rowspan,
        columns,
        coord,
        cheked: true,
      };

      if (rowspan > 1) {
        for (let jRow = iRow + 1; jRow < rowspan; jRow++) {
          valuesArr[jRow][j] = {
            Header: "_______",
            coord,
            link: [iRow, i],
            cheked: true,
            colspan,
          };
        }
      }

      if (colspan > 1) {
        for (let s = 1; s < colspan; s++) {
          valuesArr[iRow][s + j] = {
            Header: "-----",
            c: `${i}_${j}_${s}_${iRow}`,
            a: $(td).text().trim(),
            coord: `${iRow + 1}_${s + j + 1}`,
            link: [iRow, i],
            cheked: true,
            colspan,
          };
        }
        j += +colspan - 1;
      }
    }
  }

  return valuesArr;
}
