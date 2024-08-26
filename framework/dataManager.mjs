const fs = require('fs');
const path = require('path');

const loadTestData = (fileName) => {
  const filePath = path.join(__dirname, '../data', fileName);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

module.exports = { loadTestData };
