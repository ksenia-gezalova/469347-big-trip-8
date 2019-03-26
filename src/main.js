import {points, filters} from "./data";
import {Point} from "./point";
import {PointEdit} from "./pointEdit";
import {Filter} from "./filter";
import {getStat} from "./stat";

const tripLinks = document.querySelector(`.trip-links`);
const mainContainer = document.querySelector(`.main`);
const stat = document.querySelector(`.statistic`);
const filtersContainer = document.querySelector(`.trip-filter`);
const pointsContainer = document.querySelector(`.trip-day__items`);

const deletePoint = (items, i) => {
  items.splice(i, 1);
};

// eslint-disable-next-line consistent-return
const filterPoints = (items, name) => {
  switch (name) {
    case `filter-everything`:
      return items;

    case `filter-future`:
      return items.filter((item) => item.duration > Date.now());

    case `filter-past`:
      return items.filter((item) => item.duration < Date.now());
  }
};

const renderFilters = (items) => {
  filtersContainer.innerHTML = ``;
  for (let i = 0; i < items.length; i++) {
    const item = filters[i];
    const itemComponent = new Filter(item);
    filtersContainer.appendChild(itemComponent.render());
  }
};

const renderPoints = (items) => {
  pointsContainer.innerHTML = ``;

  for (let i = 0; i < items.length; i++) {
    const point = items[i];
    const pointComponent = new Point(point);
    const pointEditComponent = new PointEdit(point);

    pointComponent.onEdit = () => {
      pointEditComponent.render();
      pointsContainer.replaceChild(
          pointEditComponent.element,
          pointComponent.element
      );
      pointComponent.unrender();
    };

    pointEditComponent.onSubmit = (newObject) => {
      point.price = newObject.price;

      pointComponent.update(point);
      pointComponent.render();
      pointsContainer.replaceChild(
          pointComponent.element,
          pointEditComponent.element
      );
      pointEditComponent.unrender();
    };

    pointEditComponent.onDelete = () => {
      deletePoint(items, i);
      pointEditComponent.unrender();
      renderPoints(items);
    };

    pointsContainer.appendChild(pointComponent.render());
  }
};

const toggleHandler = (element) => {
  let items = element.querySelectorAll(`.view-switch__item`);
  items.forEach((item) => {
    if (item.classList.contains(`.view-switch__item--active`)) {
      item.classList.remove(`view-switch__item--active`);
    } else {
      item.classList.add(`view-switch__item--active`);
    }
  });
};

tripLinks.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  if (evt.target.textContent === `Stats`) {
    mainContainer.classList.add(`visually-hidden`);
    stat.classList.remove(`visually-hidden`);
    getStat();
  } else {
    mainContainer.classList.remove(`visually-hidden`);
    stat.classList.add(`visually-hidden`);
  }
  toggleHandler(tripLinks);
});

filtersContainer.addEventListener(`change`, (evt) => {
  const filterName = evt.target.id;
  const filteredPoints = filterPoints(points, filterName);
  renderPoints(filteredPoints);
});

renderFilters(filters);
renderPoints(points);
