import {createSiteMenuTemplate} from './view/menu.js';
import {createSiteFilterTemplate} from './view/filter.js';
import {createSiteInfoTemplate} from './view/info.js';
import {createSiteSortTemplate} from './view/sorting.js';
import {createSiteListTemplate} from './view/list.js';
import {createPoints} from './mock/task.js';


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const NUM_COUNT = 20;
const tempArg = createPoints(NUM_COUNT);


// Вставляем Города и даты
let siteMainElement = document.querySelector('.trip-main');
render(siteMainElement, createSiteInfoTemplate(tempArg), 'afterbegin');


// Вставляем Меню

let siteHeaderElement = siteMainElement.querySelector('.trip-controls__navigation');
render(siteHeaderElement, createSiteMenuTemplate(), 'beforeend');

// Вставляем фильтры

siteHeaderElement = siteMainElement.querySelector('.trip-controls__filters');
render(siteHeaderElement, createSiteFilterTemplate(), 'beforeend');

//Вставляем сортировку


siteMainElement = document.querySelector('.page-body__page-main');
siteHeaderElement = siteMainElement.querySelector('.trip-events');
render(siteHeaderElement, createSiteSortTemplate(), 'beforeend');

// Вставляем список
const ulElement = document.createElement('ul');
ulElement.classList.add('.trip-events__list');
siteHeaderElement.append(ulElement);
const listTrips = createSiteListTemplate(tempArg);
for (const listTrip of listTrips) {
  render(ulElement, listTrip, 'beforeend');
}


