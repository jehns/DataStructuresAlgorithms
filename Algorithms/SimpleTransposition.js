// Simple transposition is a basic and simple cryptography technique. We make 2 rows and put first a letter in the Row 1, the second in the Row 2, third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.


function simpleTransposition(text) {
  let row1 = '';
  let row2 = '';
  text.split('').forEach((val, i)=> i % 2 !== 0 ? row2 = row2 + val: row1 = row1 + val);
  return row1 + row2;
  }

  console.log(simpleTransposition('Sample text'));
