//Функция для проверки максимальной длины строки
function checkString (testString, maxLength) {
  if (testString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkString ('', 2); // временно вызвала чтобы ESLint не ругался


//Функция возвращает случайное целое число из переданного диапазона включительно
function getRandomInteger (min, max) {

  if (max < min) {
    const replacement = min;
    min = max;
    max = replacement;
  }

  if ( min < 0 ) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // ссылка на источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
}

getRandomInteger (1, 3); // временно вызвала чтобы ESLint не ругался
