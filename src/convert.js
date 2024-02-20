const xlsx = require('xlsx');
const fs = require('fs');

// Load Excel file
const workbook = xlsx.readFile('Food_Display_Table.xlsx');

// Assuming the first sheet contains the data
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert Excel data to JSON
const jsonData = xlsx.utils.sheet_to_json(sheet);

// Write JSON data to file
fs.writeFileSync('foodData.json', JSON.stringify(jsonData, null, 2));

console.log('Excel file converted to JSON.');
