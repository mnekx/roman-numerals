function convertToRoman() {
    let num = document.getElementById('numeral').value
    let romanStr = '';
    let tensObj = {
      1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: "L",
      6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC'
    }
    let onesObj = {
      1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V',
      6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'
    }
    let hundredsObj = {
      1: 'C', 2: 'CC', 3: 'CCC', 4:'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM'
    }
    let thousandsObj = {
      1: 'M', 2: 'MM', 3: 'MMM'
    }
    if(num / 1000 >= 1) {
      let thousands = Math.floor(num/1000)
      romanStr += thousandsObj[thousands];
      if(num % 1000 >= 100) {
        let hundreds = Math.floor((num % 1000) / 100);
        romanStr += hundredsObj[hundreds]
      }
      if(num % 100 >= 10) {
        let tens = Math.floor((num % 100) / 10);
        romanStr += tensObj[tens]
      }
      if(num % 10 >= 1) {
        let ones = num % 10;
        romanStr += onesObj[ones]
      }
    } 
    else if(num / 100 >= 1) {
      let hundreds = Math.floor(num/100)
      romanStr += hundredsObj[hundreds];
      if(num % 100 >= 10) {
        let tens = Math.floor((num % 100) / 10);
        romanStr += tensObj[tens]
      }
      if(num % 10 >= 1) {
        let ones = num % 10;
        romanStr += onesObj[ones]
      }
    }
    else if (num / 10 >= 1) {
      let tens = Math.floor(num/10)
      romanStr += tensObj[tens];
      if(num % 10 >= 1) {
        let ones = num % 10;
        romanStr += onesObj[ones]
      }
    } else {
      romanStr += onesObj[num]
    }
  
    console.log(romanStr)
    document.getElementById('h').innerHTML = romanStr;
//    return romanStr;
  }
  
//   convertToRoman(1023);