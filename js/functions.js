//я это все срисовала конечно, что бы хоть как то разобраться.
//и начать что то делать и не тормозить .

function isLessOrEqual (string, length) {
  return string.length <= length;
}

(isLessOrEqual('проверочная строка', 20));
(isLessOrEqual('проверочная строка', 18));
(isLessOrEqual('проверочная строка', 10));


const isLessOrEqual1 = (string, length) => string.length <= length;

isLessOrEqual1('проверочная строка', 20);
isLessOrEqual1('проверочная строка', 18);
isLessOrEqual1('проверочная строка', 10);


//Palindrom (здесь что то не так , но я ни как не сообрaжу)

function isPalindrom (rawString) {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }

  }
  return true;
}
isPalindrom ('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('лёша на полке клопа нашёл');
