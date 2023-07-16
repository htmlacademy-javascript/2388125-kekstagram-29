import {getRandomArrayElement,getRandomIntegerInclusive,createSequence} from './util.js';


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


 const generateCommentId = createSequence(MIN_COMMENT_ID);


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


const createPhoto = (id) => ({
  id,
  url: `Photos/${id}.jpg`,
  descriptions: DESCRIPTION_FOTO[id - 1],

  likes: getRandomIntegerInclusive(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: createComents(),
});

const createPhotos = () => Array.from({length: PHOTO_ID}, (_, index) => {
  createPhoto(index + 1);
});

createPhoto();
createPhotos();


