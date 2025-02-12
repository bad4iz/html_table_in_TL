
import { load } from "cheerio";

/**
 * Функция для получения значений из HTML-строки для последующей обратотки
 *
 * @param {string} html - HTML-строка
 * @param {Object} options - Объект опций
 * @param {number} options.VALUE_STR_NUM - Номер строки где  значения.
 * @param {number} options.HEADER_STR_NUM -  Колчичество строк заголовков.
 * @param {number} options.START_HEADER_STR_NUM - Номер строки где начинаются заголовки
 * @return {Array} - Двухмерный массив с данными о ячейках хедера.
 */
export default function getValuesArr(html, {

  VALUE_STR_NUM,
  HEADER_STR_NUM, START_HEADER_STR_NUM
}) {
  const $ = load(html);
  const table = $("table");

  const rows = table.find("tr");

  const values = rows.eq(VALUE_STR_NUM).find("td");

  const valuesArr = Array.from({ length: HEADER_STR_NUM }, (__, i) =>
    Array.from({ length: values.length }, (_, idx) => i + "_" + idx + '              dddd'),
  );

  for (let iRow = START_HEADER_STR_NUM; iRow < HEADER_STR_NUM + START_HEADER_STR_NUM; iRow++) {
    const tds = rows.eq(iRow).find("td");

    for (let cursorData = 0, cursorValues = 0; cursorValues < values.length; cursorData++, cursorValues++) {
      const td = tds.eq(cursorData);

      const cursorRowData = iRow - START_HEADER_STR_NUM
      const colSpan = Number($(td).attr("colspan")) || 1;
      const rowSpan = Number($(td).attr("rowspan"));


      while (valuesArr[cursorRowData][cursorValues]?.cheked) {
        cursorValues++;
      }

      const coord = `${cursorRowData} ${cursorValues}`;

      const data = {
        coord,
        accessor: $(td).text().trim().toLowerCase().replace(/[\s+,.]/g, "_"),
        rowSpan,
        colSpan,
        cheked: true,
      }


      valuesArr[cursorRowData][cursorValues] = {
        ...data,
        Header: $(td).text().trim(),
        help: 'default'
      };

      if (rowSpan > 1 && colSpan > 1) {

        for (let cursor = cursorValues; cursor < cursorValues + colSpan; cursor++) {
          for (let jRow = cursorRowData + 1; jRow < rowSpan + cursorRowData; jRow++) {
            valuesArr[jRow][cursor] = {
              ...data,
              coord: `${jRow} ${cursor}`,
              help: 'colSpan>1*rowSpan>1',
            };
          };
        }
        cursorValues += +colSpan - 1;
        continue
      }

      if (rowSpan > 1) {
        for (let jRow = cursorRowData + 1; jRow < rowSpan + cursorRowData; jRow++) {

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
          valuesArr[cursorRowData][cursor] = {
            ...data,
            coord: `${cursorRowData} ${cursor}`,
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

