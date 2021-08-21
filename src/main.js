import SiteMenuView from './view/menu.js';
import SiteFilterView from './view/filter.js';
import SiteInfoView from './view/info.js';
import SiteSortView from './view/sorting.js';
import SiteListView from './view/list.js';
import {createPoints} from './mock/task.js';
import {createElement, renderElement, RenderPosition} from './view/utils.js';


const NUM_COUNT = 20;
const tempArg = createPoints(NUM_COUNT);

// Вставляем Города и даты
let siteMainElement = document.querySelector('.trip-main');
renderElement(siteMainElement, new SiteInfoView(tempArg).getElement(), RenderPosition.AFTERBEGIN);


// Вставляем Меню

let siteHeaderElement = siteMainElement.querySelector('.trip-controls__navigation');
renderElement(siteHeaderElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);

// Вставляем фильтры

siteHeaderElement = siteMainElement.querySelector('.trip-controls__filters');
renderElement(siteHeaderElement, new SiteFilterView().getElement(), RenderPosition.BEFOREEND);

//Вставляем сортировку


siteMainElement = document.querySelector('.page-body__page-main');
siteHeaderElement = siteMainElement.querySelector('.trip-events');
renderElement(siteHeaderElement, new SiteSortView().getElement(), RenderPosition.BEFOREEND);

// Вставляем список

const ulElement = document.createElement('ul');
ulElement.classList.add('.trip-events__list');
siteHeaderElement.append(ulElement);
const listTrips = new SiteListView(tempArg).getTemplate();
for (const listTrip of listTrips) {
  renderElement(ulElement, createElement(listTrip), RenderPosition.BEFOREEND);
}


