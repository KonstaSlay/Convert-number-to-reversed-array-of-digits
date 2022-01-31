/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]*/

function digitize(n) {
  let str = String(n);
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(Number(str[i]));
  }
  return arr.reverse();

}


/*function digitize(n) {
  return String(n).split('').map(Number).reverse()
}*/