const map = ['Header', 'accessor', 'rowSpan']

const removeArtifacts = (params) => {
  return params.map((item) => {
    return Object.keys(item).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).reduce((acc, key) => {

      if (map.includes(key)) {
        if (item[key]) {
          acc[key] = item[key]
        }
      }

      if (key === 'columns') {
        acc[key] = removeArtifacts(item.columns)
      }

      return acc
    }, {})
  });
}
export default removeArtifacts
