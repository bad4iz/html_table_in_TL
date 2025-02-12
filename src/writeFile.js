
import fs from "fs";
import path from "path";

/**
 * Функция для записи JSON-структуры в файл.
 *
 * @param {Object} data - Объект JSON-структуры
 * @param {string} [fileName="output.js"] - Имя файла, в который будет записана JSON-структура
 * @returns {void}
 */
export function writeFile(data, fileName = "output.js") {
  const jsonStructure = JSON.stringify(data, null, 2);
  const folderName = './out'

  // Проверяем, существует ли папка
  if (!fs.existsSync(folderName)) {
    // Если папка не существует, создаём её
    fs.mkdirSync(folderName, { recursive: true });
  }

  // Формируем полный путь к файлу
  const filePath = path.join(folderName, fileName);

  fs.writeFile(
    filePath,
    `export const tableStructure = ${jsonStructure};`,
    "utf-8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("JSON structure saved to " + filePath);
    },
  );
}
