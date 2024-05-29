function addtocard(...val1) {
  return val1;
}

console.log(addtocard(10, 230, 32, 12, 231));
const cartitems = addtocard(2, 421);
var a = 0;
for (i = 0; i < cartitems.length; i++) {
  a = a + cartitems[i];
}
console.log(a);
