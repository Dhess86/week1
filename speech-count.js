const speech = '“It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us; that from these honored dead we take increased devotion to that cause for which they here gave the last full measure of devotion; that we here highly resolve that these dead shall not have died in vain; that this nation, under God, shall have a new birth of freedom, and that government of the people, by the people, for the people, shall not perish from the Earth.”';
function count_occur(str) { 
    if (str.length == 0) {
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
  let test_str = speech;
  count_occur(test_str);
  