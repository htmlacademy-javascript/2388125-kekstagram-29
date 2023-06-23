const isLessOrEqual = (string, length) => string.length <= length;

isLessOrEqual ('проверяемая строка', 20);
isLessOrEqual ('проверяемая строка', 18);
isLessOrEqual ('проверяемая строка', 10);


// isPalindrom

function isPalindrom (rawString){
  const string = rawString.replaceAll(' ', '').tolowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if(string.at(i) !== string.at(-i - 1)){
      return false;
    }
  }
  return true;
}
isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('лёша на полке клопа нашёл');
