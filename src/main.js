import {createSiteMenuTemplate} from './view/menu.js';
import {createSiteFilterTemplate} from './view/filter.js';
import {createSiteInfoTemplate} from './view/info.js';
//import {createSiteCostTemplate} from './view/cost.js';
import {createSiteSortTemplate} from './view/sorting.js';
import {createSiteListTemplate} from './view/list.js';


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Вставляем Города и даты
let siteMainElement = document.querySelector('.trip-main');
render(siteMainElement, createSiteInfoTemplate(), 'afterbegin');

// Вставляем стоимость путешествия
//render(siteMainElement, createSiteCostTemplate(), 'beforeend');

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
render(siteHeaderElement, createSiteListTemplate, 'beforeend');

