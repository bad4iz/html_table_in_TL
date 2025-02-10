
const {
  VALUE_STR_NUM,
  HEADER_STR_NUM,
} = require("./const");
const cheerio = require("cheerio");

function getValuesArr(html) {
  const $ = cheerio.load(html);
  const table = $("table");

  const rows = table.find("tr");

  const values = rows.eq(VALUE_STR_NUM).find("td");

  const valuesArr = Array.from({ length: HEADER_STR_NUM }, (__, i) =>
    Array.from({ length: values.length }, (_, idx) => i + "_" + idx + '              dddd'),
  );

  for (let iRow = 0; iRow < HEADER_STR_NUM; iRow++) {
    const tds = rows.eq(iRow).find("td");

    for (let cursorData = 0, cursorValues = 0; cursorData < values.length; cursorData++, cursorValues++) {
      const td = tds.eq(cursorData);

      const colSpan = Number($(td).attr("colspan")) || 1;
      const rowSpan = Number($(td).attr("rowspan"));


      while (valuesArr[iRow][cursorValues]?.cheked) {
        cursorValues++;
      }

      const coord = `${iRow} ${cursorValues}`;

      const data = {
        coord,
        accessor: $(td).text().trim().toLowerCase().replace(/[\s+,.]/g, "_"),
        rowSpan,
        colSpan,
        cheked: true,
      }


      valuesArr[iRow][cursorValues] = {
        ...data,
        Header: $(td).text().trim(),
        help: 'default'
      };

      if (rowSpan > 1) {
        for (let jRow = iRow + 1; jRow < rowSpan + iRow; jRow++) {

          valuesArr[jRow][cursorValues] = {
            // link: [iRow, i],
            ...data,
            coord: `${jRow} ${cursorValues}`,
            help: 'rowSpan>1',
            colspan: undefined,
            rowSpan: undefined,
          };
        }
      }

      if (colSpan > 1) {
        for (let cursor = cursorValues + 1; cursor < cursorValues + colSpan; cursor++) {
          valuesArr[iRow][cursor] = {
            ...data,
            coord: `${iRow} ${cursor}`,
            help: 'colSpan>1',
            colspan: undefined,
            rowSpan: undefined,
          };
        }
        cursorValues += +colSpan - 1;
      }
    }
  }


  // добавляем accessor в последнюю строку
  for (let i = 0; i < values.length; i++) {

    // добавляем accessor из value в последнюю строку
    valuesArr[valuesArr.length - 1][i].accessor = values.eq(i).text().trim();

    // добавляем accessor из заголовка последней строчки в  предпоследнюю строку строку
    valuesArr[valuesArr.length - 2][i].accessor = valuesArr[valuesArr.length - 1][i].Header.toLowerCase().replace(/[\s+,.]/g, "_");
  }

  return valuesArr;
}

module.exports = getValuesArr;
