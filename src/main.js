import {
  point
} from './data';
import {
  filters
} from './data';
import {
  Point
} from './point';
import {
  PointEdit
} from './pointEdit';
import {
  Filter
} from "./filter";


const filtersContainer = document.querySelector(`.trip-filter`);
const pointsContainer = document.querySelector(`.trip-day__items`);
const pointComponent = new Point(point);
const pointEditComponent = new PointEdit(point);
// listener for filters
/* filtersContainer.addEventListener(`change`, (evt) => {
  if (evt.target.name === `filter`) {
    removeItems(pointsContainer);
    renderItems(pointsContainer, points.slice(getRandomValue(1, points.length)), getPoint);
  }
}); */

pointsContainer.appendChild(pointComponent.render());
// filtersContainer.appendChild(filterComponent.render());

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

pointEditComponent.onDelete = () => {
  pointEditComponent.unrender();
};

const renderFilters = (items) => {
  filtersContainer.innerHTML = ``;

  for (let i = 0; i < items.length; i++) {
    const item = filters[i];
    const itemComponent = new Filter(item);
    filtersContainer.appendChild(itemComponent.render());
  }
};

renderFilters(filters);
