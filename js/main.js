/*В файле main.js напишите необходимые функции для создания массива из 25
сгенерированных объектов. Каждый объект массива — описание фотографии,
опубликованной пользователем.*/

//Структура каждого объекта должна быть следующей:

//id, число — идентификатор опубликованной фотографии.
//Это число от 1 до 25. Идентификаторы не должны повторяться.

//url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}}
//— это число от 1 до 25. Адреса картинок не должны повторяться.

//description, строка — описание фотографии.


//likes, число — количество лайков, поставленных фотографии.
//Случайное число от 15 до 200.

//comments, массив объектов — список комментариев, оставленных другими
//пользователями к этой фотографии. Количество комментариев к каждой фотографии
//— случайное число от 0 до 30. Все комментарии генерируются случайным образом.


//У каждого комментария есть идентификатор — id — любое число.
//Идентификаторы не должны повторяться.

//Поле avatar — это строка, значение которой формируется по правилу
//img/avatar-{{случайное число от 1 до 6}}.svg.
//Аватарки подготовлены в директории img.

//Для формирования текста комментария — message — вам необходимо
//взять одно или два случайных предложения из представленных ниже:

//Имена авторов также должны быть случайными. Набор имён для комментаторов
//составьте сами. Подставляйте случайное имя в поле name.
/*
4 функций: createComment, createComments, createPhoto,
createPhotos.
В качестве id можно использовать просто порядковый
номер итерации (index) из
`Array.from((_, index) => ). Он конечно будет повторяться в
комментариях, но и это решаемо.
*/


const PHOTO_ID = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;
const MIN_COMMENT_ID = 100;
const MIN_AVTAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;

const NAMES = [
  'Вася',
  'Алиса',
  'Егор',
  'Сафия',
  'Сергей',
  'Елена',
  'Станислав',
  'Валерия',
  'Кирил',
  'Варвара',
  'Михаил',
  'Рита',
  'Пётр',
  'Елизавета',
  'Аристарх',
  'Мирослава',
  'Евгений',
  'Галина',
];

const SURNAMES = [
  'Петросян',
  'Аветисян',
  'Трофимчук',
  'Полещук',
  'Саркисян',
  'Аванисян',
  'Каломиец',
  'Лагутенко',
  'Шмидт',
  'Гайдай',
  'Кобец',
  'Шульга',
  'Жук',
  'Лебедь',
  'Щука',
  'Гаврик',
  'Шмонько',
  'Тузюк',
];


const COMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION_FOTO = [
  'Водоём',
  'Указатель',
  'Пляж',
  'Том Ям',
  'Машина',
  'Клубника на тарелке',
  'Морс',
  'Самалёт над пляжем',
  'Обувь в обувнице',
  'Тропинка к пляжу',
  'Ауди ТТ',
  'Салат микс',
  'Котосуши',
  'Домашняя обувь',
  'Самолет над облаками',
  'Хор',
  'Ретро Авто',
  'Тапочки с подсветкой',
  'Отель',
  'Салат с курицей',
  'Закат на пляже',
  'Краб',
  'Фанаты',
  'Сафари',
];

const getRandomIntegerInclusive = (min, max) =>{
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const createSequence = (startNumber = 1) => {
  let index = startNumber;
  return () => index++;
};

const generateCommentId = createSequence(MIN_COMMENT_ID);
const getRandomArrayElement = (elements) => elements[getRandomIntegerInclusive(0, elements.length - 1)];

const createComment = (id) => ({
  id,
  avatar: `img/avatar - ${getRandomIntegerInclusive(MIN_AVTAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
  massage: Array.from({length: getRandomIntegerInclusive(1, 2) }, () => getRandomArrayElement(COMENTS)).join(' '),
  name: getRandomArrayElement(NAMES,SURNAMES),
});

const createComents = () =>
  Array.from(
    { length: getRandomIntegerInclusive(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT) },
    () => createComment(generateCommentId()),
  );

// eslint-disable-next-line no-unused-vars
const createPhoto = (id) => ({
  id,
  url: `Photos/${id}.jpg`,
  descriptions: DESCRIPTION_FOTO[id - 1],
  likes: getRandomIntegerInclusive(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: createComents(),
});
// eslint-disable-next-line no-unused-vars
const createPhotos = () => Array.from({length: PHOTO_ID}, (_, index) => {
  createPhotos(index + 1);
});

