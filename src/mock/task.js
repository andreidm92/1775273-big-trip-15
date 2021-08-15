
import dayjs from 'dayjs';
import { getRandomInteger } from '../view/utils.js';

const generateDate = () => {
  // Когда в руках молоток, любая проблема - гвоздь.
  // Вот и для генерации случайного булевого значения
  // можно использовать "функцию из интернета".
  // Ноль - ложь, один - истина. Для верности приводим
  // к булевому типу с помощью Boolean
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(0, maxDaysGap);

  return dayjs().add(daysGap, 'day').format('MMM D');
};


const generateDescription = (times) => {
  const repeatingTimes = getRandomInteger(1, times);
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',
  ];
  let totalDescription = '';
  for (let i=1; i<=repeatingTimes; i++) {
    const randomIndex = getRandomInteger(0, descriptions.length - 1);
    totalDescription += descriptions[randomIndex];
  }
  return totalDescription;
};

const generateTown = () => {
  const towns = ['Paris', 'Moscow', 'Amsterdam', 'Rome', 'Washington', 'Zurix', 'Chamonix' ];
  const randomIndex = getRandomInteger(0, towns.length - 1);
  return towns[randomIndex];
};

const generateFoto = () =>{
  const fotoLink = 'http://picsum.photos/248/152';
  return `${fotoLink}${getRandomInteger(0,9)}`;
};

const NUMBER_DESCIPTION = 5;
const NUMBER_PICTURE_DESCRIPTION = 1;

// eslint-disable-next-line no-unused-vars
const Destination = {
  description: generateDescription(NUMBER_DESCIPTION),
  name: generateTown(),
  pictures: [
    {
      src: generateFoto(),
      description: generateDescription(NUMBER_PICTURE_DESCRIPTION),
    },
  ],
};
const transport = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const generateOffer = () => {
  const offerList = [
    {
      title: 'Add luggage',
      price: 30,
    }, {
      title: 'Switch to comfort class',
      price: 100,
    },{
      title: 'Add meal',
      price: 15,
    },{
      title: 'Choose seats',
      price: 5,
    },{
      title: 'Travel by train',
      price: 40,
    },
  ];
  const offerNumber = getRandomInteger(0, offerList.length);
  const offerActualList = [];
  for (let i=1; i<=offerNumber; i++) {
    const randomIndex = getRandomInteger(0, offerList.length - 1);
    offerActualList.push(offerList[randomIndex]);
  }
  //console.log(offerActualList[0]);
  return offerActualList;


};


const generatePrice = ()=>{
  const price = [900, 1100, 1500, 800, 2000, 600, 2100 ];
  const randomIndex = getRandomInteger(0, price.length - 1);
  return price[randomIndex];
};

const generateType = ()=>{
  const randomIndex = getRandomInteger(0, transport.length - 1);
  return transport[randomIndex];
};

const generatePoint = () => {
  const point = {
    basePrice: generatePrice(),
    dateFrom: dayjs().format('MMM D'),
    dateTo: generateDate(),
    destination: generateTown(),
    id: '0',
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: generateOffer(),
    type: generateType(),
  };
  return point;
};

export const createPoints = function (NEW_POINTS) {
  const listArray = new Array(NEW_POINTS).fill().map(generatePoint);
  return listArray;
};

