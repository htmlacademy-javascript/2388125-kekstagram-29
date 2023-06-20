//я это все срисовала конечно, что бы хоть как то разобраться
//и начать что то делать и не тормозить .

function isLessOrEqual (string, length) {
  return string.length <= length;
}

console.log (isLessOrEqual('проверочная строка', 20));
console.log (isLessOrEqual('проверочная строка', 18));
console.log (isLessOrEqual('проверочная строка', 10));


const isLessOrEqual1 = (string, length) => string.length <= length;

console.log (isLessOrEqual('проверочная строка', 20));
console.log (isLessOrEqual('проверочная строка', 18));
console.log (isLessOrEqual('проверочная строка', 10));


//Palindrom (здесь что то не так , но я ни как не сооброжу)
function isPolindrom(rawString) {
  const string = rawString.replaceAll('', '').tolowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }

  }
  return true;
}

consol.log (isPolindrom('топот'));
consol.log (isPolindrom('ДовОд'));
consol.log (isPolindrom('Кекс'));
consol.log (isPolindrom('Леша на полке клопа нашел'));
