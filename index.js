function convertToRoman(num) {
    //defining string 
    let result = "";
    //using a while loop with compound assignment 
    while (num >= 0) {
      //Adding an I to the string
      result += "I";
      num -= 1;
    }
   return result;
  }
  
  convertToRoman(36);