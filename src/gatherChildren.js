/**
 * Функция для объединения ячейки с учетом объединённых ячейкам
 *
 * @param {Array} data - Двухмерный массив с данными о ячейках хедера.
 * @return {Array} - Двухмерный массив с данными о ячейках хедера.
 */
export function gatherChildren(data) {
  if (!data.length) return [];


  const answer = [];

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
      const rowSpan = cell.rowSpan || 1;

      for (let ix = rowSpan; ix < data.length; ix++) {

        if (!cell.Header && cell.rowSpan < 2) {
          continue
        }

        children.push(data[ix].slice(j, j + cell.colSpan));
      }

      if (children.length) {
        cell.columns = gatherChildren(children);
      }
    }

    answer.push(cell);
  }
  return answer;
}
