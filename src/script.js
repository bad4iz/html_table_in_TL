import { gatherChildren } from "./gatherChildren.js";
import getValuesArr from "./getValuesArr.js";
import removeArtifacts from "./removeArtifacts.js";
import { writeFile } from "./writeFile.js";

/**
 * Функция для обработки HTML-строки. 
 *
 * @param {string} html - HTML-строка
 * @param {Object} options - Объект опций
 * @param {number} options.VALUE_STR_NUM - Номер строки где  значения.
 * @param {number} options.HEADER_STR_NUM -  Колчичество строк заголовков.
 * @param {number} options.START_HEADER_STR_NUM - Номер строки где начинаются заголовки
 * @return {Array} - Двухмерный массив с данными о ячейках хедера.
 */
export default (html, {
  VALUE_STR_NUM,
  HEADER_STR_NUM,
  START_HEADER_STR_NUM
}) => {
  const valuesArr = getValuesArr(html, {
    VALUE_STR_NUM,
    HEADER_STR_NUM,
    START_HEADER_STR_NUM
  });

  const valueWithChildren = gatherChildren(valuesArr);

  return removeArtifacts(valueWithChildren);
}


