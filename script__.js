const fs = require("fs");
const xlsx = require("xlsx");

async function convertXlsxToJs(filePath) {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Преобразуем лист в массив массивов
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    // Функция для построения вложенной структуры заголовков
    // function buildColumns(headers, level = 0) {
    //   if (level >= headers?.length) return [];
    //   console.log(level);
    //   if (level >= 6) return [];
    //
    //   return headers[level]?.map((header, idx) => {
    //     if (!header) return;
    //
    //     // console.log("header", typeof header);
    //     // console.log(idx, header);
    //
    //     return {
    //       Header: header,
    //       accessor: String(header)
    //         ?.toLowerCase()
    //         .replace(/[\s+\,\.]/g, "_"),
    //
    //       columns: headers[level + 1][idx],
    //     };
    //   });
    //
    const addCollData = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        console.log("arr[i]", arr[i], i);
      }
      return arr;
    };

    const fixedHeaders = (arr) => {
      return arr;
      return arr.map((item) => {
        console.log("item", item);
        // return item;
        const data = [...item.data];

        const Header = data.shift();
        let rowSpan = 0;

        while (data.length || data[0]) {
          if (data[0]) {
            break;
          }
          rowSpan++;
          data.shift();
        }

        return {
          Header: Header,
          columns: item.columns,
          accessor: data,
          rowSpan,
        };
      });
    };

    function buildColumns(headers, rows) {
      const arr = rows[0].map((row, idx) => {
        let headerStr = [];

        for (let i = 0; i < headers.length; i++) {
          const header = headers[i][idx];
          console.log("header", i, header);
          headerStr.push(header);
        }

        console.log("headerStr", headerStr);
        return {
          data: headerStr,
          accessor: row,
        };
      });

      return fixedHeaders(addCollData(arr));
    }

    //   console.log("headers", headers[2]);
    //   while (index < headers[level]?.length) {
    //     console.log(headers[level]);
    //     let header = headers[level][index];
    //     let subHeaders = headers.slice(level + 1);
    //     // console.log("subHeaders", subHeaders);
    //     let hasChildren = subHeaders.some((h) => h !== undefined);
    //
    //     let column = {
    //       Header: header,
    //       accessor: `col_${index}`,
    //     };
    //
    //     if (hasChildren) {
    //       column.columns = buildColumns(subHeaders, level + 1);
    //     }
    //
    //     columns.push(column);
    //     index++;
    //   }
    //   return columns;
    // }

    const headers = data.slice(12, 19); // Берем первые 7 строк как заголовки
    const rows = data.slice(20); // Остальные строки — данные
    const columns = buildColumns(headers, rows);

    console.log("columns.length", columns.length);

    // Формируем JavaScript-объект
    const jsStructure = `export const columnsYardTabTitle = ${JSON.stringify(columns, null, 2)};`;

    // Сохраняем в файл
    fs.writeFileSync("output.js", jsStructure, "utf8");
    console.log("Файл output.js успешно создан!");
  } catch (error) {
    console.error("Ошибка обработки XLSX файла:", error);
  }
}

// Укажите путь к вашему XLSX-файлу
convertXlsxToJs("input.xlsx");
