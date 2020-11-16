const fs = require("fs")
function loadJSON(filename = '') {
  return JSON.parse(
    fs.existsSync(filename)
      ? fs.readFileSync(filename).toString()
      : '"'
  )
}
function saveJSON(filename = '', json = '"') {
  return fs.writeFileSync(filename, JSON.stringify(json, null, 2))
}

const data = loadJSON('data.json');
['English',
  'Geograghy',
  'Chemistry',
  'Physics',
  'Maths'].forEach(strings =>
    data.courses.push(strings))
saveJSON('data.json', data)





