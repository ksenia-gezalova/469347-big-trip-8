import {points, filters} from "./data";
import {Point} from "./point";
import {PointEdit} from "./pointEdit";
import {Filter} from "./filter";
import {getStat} from "./stat";

const MS_IN_DAY = 24 * 60 * 60 * 1000;

const tripLinks = document.querySelector(`.trip-links`);
const mainContainer = document.querySelector(`.main`);
const stat = document.querySelector(`.statistic`);
const filtersContainer = document.querySelector(`.trip-filter`);
const pointsContainer = document.querySelector(`.trip-day__items`);
const newEventBtn = document.querySelector(`.trip-controls__new-event`);

const createPoint = (items) => {
  const item = {
    type: [
      {
        icon: `🚕`,
        caption: `Taxi to`
      },
      {
        icon: `🚌`,
        caption: `Bus to`
      },
      {
        icon: `🚂`,
        caption: `Train to`
      },
      {
        icon: `🛳️`,
        caption: `Ship to`
      },
      {
        icon: `🚊`,
        caption: `Transport to`
      },
      {
        icon: `🚗`,
        caption: `Drive to`
      },
      {
        icon: `✈️`,
        caption: `Flight to`
      },
      {
        icon: `🏨`,
        caption: `Check-in`
      },
      {
        icon: `🏛️`,
        caption: `Sightseeing`
      },
      {
        icon: `🍴`,
        caption: `Restaurant in`
      }
    ][Math.floor(Math.random() * 10)],
    place: [
      `Oslo`,
      `Maldives`,
      `New Zeland`,
      `Goa`,
      `Antigua and Barbuda`,
      `Tortuga`,
      `Moscow`
    ][Math.floor(Math.random() * 7)],
    offers: [`Add luggage`],
    pictureURL: `http://picsum.photos/300/150?r=${Math.random()}`,
    date: {
      start: Date.now() + Math.floor(Math.random() * 6) * MS_IN_DAY,
      end: Date.now() + Math.floor(Math.random() * 6) * MS_IN_DAY
    },
    duration: Date.now() + Math.floor(Math.random() * 6) * MS_IN_DAY,
    price: 10 + Math.floor(Math.random() * 100),
    description: `bla bla bla`
  };
  items.unshift(item);
  renderPoints(items);
};

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
    item.classList.remove(`view-switch__item--active`);
  });
};

tripLinks.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  toggleHandler(tripLinks);
  if (evt.target.textContent === `Stats`) {
    mainContainer.classList.add(`visually-hidden`);
    stat.classList.remove(`visually-hidden`);
    getStat();
  } else {
    mainContainer.classList.remove(`visually-hidden`);
    stat.classList.add(`visually-hidden`);
  }
  evt.target.classList.add(`view-switch__item--active`);
});

filtersContainer.addEventListener(`change`, (evt) => {
  const filterName = evt.target.id;
  const filteredPoints = filterPoints(points, filterName);
  renderPoints(filteredPoints);
});

newEventBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  createPoint(points);
});

renderFilters(filters);
renderPoints(points);
