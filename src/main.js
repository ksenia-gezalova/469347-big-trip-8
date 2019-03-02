import {getFilter} from "./make-filter";
import {getPoint} from "./make-point";

const POINTS_AMOUNT = 7;
const MS_IN_DAY = 24 * 60 * 60 * 1000;
const TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;

const filtersContainer = document.querySelector(`.trip-filter`);
const pointsContainer = document.querySelector(`.trip-day__items`);

const filters = [
  {
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

const point =
  {
    title: `Flight to Geneva`,
    type: {
      taxi: `🚕`,
      bus: `🚌`,
      train: `🚂`,
      ship: `🛳️`,
      transport: `🚊`,
      drive: `🚗`,
      flight: `✈️`,
      checkIn: `🏨`,
      sightseeing: `🏛️`,
      restaurant: `🍴`,
    },
    places: [
      `Oslo`,
      `Maldives`,
      `New Zeland`,
      `Goa`,
      `Antigua and Barbuda`,
      `Tortuga`,
      `Moscow`
    ],
    offers: [
      `Add luggage`,
      `Switch to comfort class`,
      `Add meal`,
      `Choose seats`
    ],
    pictureURL: `http://picsum.photos/300/150?r=${Math.random()}`,
    date: {
      start: Date.now(),
      end: Date.now() + 1 + Math.floor(Math.random() * 7) * MS_IN_DAY
    },
    duration: Date.now(),
    price: 10 + Math.floor(Math.random() * 100),
    description: TEXT.split(`.`).splice(1, Math.floor(Math.random() * 3))
  };

// create list of items
const createItems = (item, amount) => {
  return new Array(amount).fill(item);
};

const points = createItems(point, POINTS_AMOUNT);

// render items
const renderItems = (dist, elements, func) => {
  const items = elements.map(func).join(``);
  dist.insertAdjacentHTML(`beforeend`, items);
};

// remove items
const removeItems = (dist) => {
  while (dist.firstChild) {
    dist.removeChild(dist.firstChild);
  }
};

// MathRandom
const getRandomValue = (min, max) => {
  const random = min + Math.random() * (max - min);
  return Math.floor(random);
};

// render filters and points
renderItems(filtersContainer, filters, getFilter);
renderItems(pointsContainer, points, getPoint);

// listener for filters
filtersContainer.addEventListener(`change`, (evt) => {
  if (evt.target.name === `filter`) {
    removeItems(pointsContainer);
    renderItems(pointsContainer, points.slice(getRandomValue(1, points.length)), getPoint);
  }
});

