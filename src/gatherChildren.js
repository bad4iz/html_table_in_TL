
export function gatherChildren(data) {
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
