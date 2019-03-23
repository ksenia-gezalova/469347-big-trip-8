import {
  getFilter
} from "./make-filter";
import {
  point
} from './data';
import {
  Point
} from './point';
import {
  PointEdit
} from './pointEdit';

// const POINTS_AMOUNT = 7;


const filtersContainer = document.querySelector(`.trip-filter`);
const pointsContainer = document.querySelector(`.trip-day__items`);
const pointComponent = new Point(point);
const pointEditComponent = new PointEdit(point);

const filters = [{
  caption: `Everything`,
  isChecked: true
},
{
  caption: `Future`
},
{
  caption: `Past`
}
];

// create list of items
/* const createItems = (item, amount) => {
  return new Array(amount).fill(item);
}; */

/* const points = createItems(point, POINTS_AMOUNT); */

// render items
const renderItems = (dist, elements, func) => {
  const items = elements.map(func).join(``);
  dist.insertAdjacentHTML(`beforeend`, items);
};

// remove items
/* const removeItems = (dist) => {
  while (dist.firstChild) {
    dist.removeChild(dist.firstChild);
  }
}; */

// MathRandom
/* const getRandomValue = (min, max) => {
  const random = min + Math.random() * (max - min);
  return Math.floor(random);
}; */

// render filters and points
renderItems(filtersContainer, filters, getFilter);

// listener for filters
/* filtersContainer.addEventListener(`change`, (evt) => {
  if (evt.target.name === `filter`) {
    removeItems(pointsContainer);
    renderItems(pointsContainer, points.slice(getRandomValue(1, points.length)), getPoint);
  }
}); */

pointsContainer.appendChild(pointComponent.render());

pointComponent.onEdit = () => {
  pointEditComponent.render();
  pointsContainer.replaceChild(pointEditComponent.element, pointComponent.element);
  pointComponent.unrender();
};

pointEditComponent.onSubmit = (newObject) => {
  point.price = newObject.price;

  pointComponent.update(point);
  pointComponent.render();
  pointsContainer.replaceChild(pointComponent.element, pointEditComponent.element);
  pointEditComponent.unrender();
};
