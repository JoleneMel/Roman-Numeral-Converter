//Cleaned up version w/o console.logs 
function convertToRoman(num) {
    //defining string 
      let result = "";
      //with 1000 or M
      while (num >= 1000) {
      result += "M";
      num -= 1000;
    }
  
  
      //with 900 or D
      while (num >= 900) {
      result += "CM";
      num -= 900;
    }
  
  
      //with 500 or D
      while (num >= 500) {
      result += "D";
      num -= 500;
    }
  
  
      //with 400 or CD
      while (num >= 400) {
      result += "CD";
      num -= 400;
    }
  
  
      //with 100 or C
      while (num >= 100) {
      result += "C";
      num -= 100;
    }
  
  
      //with 90 or XC
      while (num >= 90) {
      result += "XC";
      num -= 90;
    }
  
  
      //with 50 or L
      while (num >= 50) {
      result += "L";
      num -= 50;
    }
  
  
      //with 40 or XL
      while (num >= 40) {
      result += "XL";
      num -= 40;
    }
  
  
    //with 10 or X
      while (num >= 10) {
      result += "X";
      num -= 10;
    }
  
    //This works UNTIL we reach 9 where it is IX
      while (num >= 9) {
      result += "IX";
      num -= 9;
    }
  
  
    //We need to go to the next largest one which is 5
    while (num >= 5) {
      result += "V";
      num -= 5;
    }
  
  
    //Using the material from https://www.mathsisfun.com/roman-numerals.html we are 
    //gonna add Vs first so we need another while loop. 
    //If i is >=4 if less it will be skipped 
    while (num >= 4) {
      result += "IV";
      //IV 4 so we need to subtract the full amount 
      num -= 4;
    }
  
    while (num >= 1) {
      //Adding an I to the string
      result += "I";
      num -= 1;
    }
   return result;
  }
  
  console.log(convertToRoman(99));