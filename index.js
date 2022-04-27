function convertToRoman(num) {
    //defining string 
    let result = "";
      //Using the material from https://www.mathsisfun.com/roman-numerals.html we are 
        //gonna add Vs first so we need another while loop. 
        while (num >= 4) {
            result += "IV";
            //IV 4 so we need to subtract the full amount 
            num -= 4;
        }
        //using a while loop with compound assignment 
        while (num >= 0) {
        //Adding an I to the string
        result += "I";
        num -= 1;
        }
   return result;
  }
  
  convertToRoman(36);