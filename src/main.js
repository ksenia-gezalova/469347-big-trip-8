import getFilter from "./make-filter";
import getPoint from "./make-point";

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

const points = [
  {
    title: `Flight to Geneva`,
    date: {
      start: `10:30`,
      end: `12:45`
    },
    duration: `2H 30M`,
    price: `45`
  },
  {
    title: `Flight to Geneva`,
    date: {
      start: `10:30`,
      end: `12:45`
    },
    duration: `2H 30M`,
    price: `45`
  },
  {
    title: `Flight to Geneva`,
    date: {
      start: `10:30`,
      end: `12:45`
    },
    duration: `2H 30M`,
    price: `45`
  },
  {
    title: `Flight to Geneva`,
    date: {
      start: `10:30`,
      end: `12:45`
    },
    duration: `2H 30M`,
    price: `45`
  },
  {
    title: `Flight to Geneva`,
    date: {
      start: `10:30`,
      end: `12:45`
    },
    duration: `2H 30M`,
    price: `45`
  },
  {
    title: `Flight to Geneva`,
    date: {
      start: `10:30`,
      end: `12:45`
    },
    duration: `2H 30M`,
    price: `45`
  },
  {
    title: `Flight to Geneva`,
    date: {
      start: `10:30`,
      end: `12:45`
    },
    duration: `2H 30M`,
    price: `45`
  }
];

// render items
const renderItems = (dist, arr, func) => {
  const items = arr.map(func).join(``);
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

