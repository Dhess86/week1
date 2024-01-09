const fs = require('fs');

function count_occur(str) {
  if (str.length === 0) {
    console.log("Invalid string");
    return;
  }
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j] && i > j) {
        break;
      }
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count > 0) {
      console.log(`${str[i]} occurs ${count} times`);
    }
    
  }
  
}


fs.readFile('speech.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  count_occur(data);
});
