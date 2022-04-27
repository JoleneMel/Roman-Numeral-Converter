function convertToRoman(num) {
    //defining string 
    let result = "";
    //We need to go to the next largest one which is 5
    while (num >= 5) {
      result += "V";
      num -= 5;
    }
     //console.log to track how much is left 
    console.log(`Finished with V, leftover: ${num}`);
    //Using the material from https://www.mathsisfun.com/roman-numerals.html we are 
    //gonna add Vs first so we need another while loop. 
    //If i is >=4 if less it will be skipped 
    while (num >= 4) {
      result += "IV";
      //IV 4 so we need to subtract the full amount 
      num -= 4;
    }
    //using a while loop with compound assignment 
    //console.log to track how much is left 
    console.log(`Finished with IV, leftover: ${num}`);
    while (num >= 0) {
      //Adding an I to the string
      result += "I";
      num -= 1;
    }
   return result;
  }
  
  convertToRoman(36);