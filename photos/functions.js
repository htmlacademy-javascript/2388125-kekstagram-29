// Cтрока короче 20 символов

const  isLessOrEqual = (string, length) => string. length <= length;

console.log(isLessOrEqual('qwertqwrttyy',20));

// Длина строки ровно 18 символов

const  isLessOrEqual1 = (string, length) => string. length ===length;

console.log(isLessOrEqual('qwertyuiopasdfghjk',18));

// Строка длиннее 10 символов

const  isLessOrEqual2 = (string, length) => string. length <= length;

console.log(isLessOrEqual('qwetyghvfgfd',10));



// Строка является палиндромом


function isPalindrom(rawString) {
  const string = rawString.replaceAll(','' ').toloverCase();
  for (let i=0;i <string.length /2; i++){
    if (string.at(i) !== string.at(-i -1)){
      return false;

    }
  }
  return true
}

console.log (isPalindrom('топот'));
console.log (isPalindrom('ДовОд'));
console.log (isPalindrom('Кекс'));
console.log (isPalindrom('Леша на полке нашел клопа'));
