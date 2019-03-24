const MS_IN_DAY = 24 * 60 * 60 * 1000;
const TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;

export const points = [{
  type: [{
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
  },
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
  offers: [
    `Add luggage`,
  ],
  pictureURL: `http://picsum.photos/300/150?r=${Math.random()}`,
  date: {
    start: Date.now() + Math.floor(Math.random() * 6) * MS_IN_DAY,
    end: Date.now() + Math.floor(Math.random() * 6) * MS_IN_DAY
  },
  duration: Date.now() + Math.floor(Math.random() * 6) * MS_IN_DAY,
  price: 10 + Math.floor(Math.random() * 100),
  description: TEXT.split(`.`).splice(1, Math.floor(Math.random() * 3))
},
{
  type: [{
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
  },
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
  duration: Date.now() + Math.floor(Math.random() * 4) * MS_IN_DAY,
  price: 10 + Math.floor(Math.random() * 100),
  description: TEXT.split(`.`).splice(1, Math.floor(Math.random() * 3))
},
{
  type: [{
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
  },
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
  offers: [
    `Add luggage`,
    `Switch to comfort class`,
  ],
  pictureURL: `http://picsum.photos/300/150?r=${Math.random()}`,
  date: {
    start: Date.now(),
    end: Date.now() + 1 + Math.floor(Math.random() * 7) * MS_IN_DAY
  },
  duration: Date.now(),
  price: 10 + Math.floor(Math.random() * 100),
  description: TEXT.split(`.`).splice(1, Math.floor(Math.random() * 3))
},
{
  type: [{
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
  },
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
  offers: [
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
},
{
  type: [{
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
  },
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
  offers: [
    `Add luggage`,
    `Add meal`,
  ],
  pictureURL: `http://picsum.photos/300/150?r=${Math.random()}`,
  date: {
    start: Date.now(),
    end: Date.now() + 1 + Math.floor(Math.random() * 7) * MS_IN_DAY
  },
  duration: Date.now(),
  price: 10 + Math.floor(Math.random() * 100),
  description: TEXT.split(`.`).splice(1, Math.floor(Math.random() * 3))
},
{
  type: [{
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
  },
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
  offers: [

  ],
  pictureURL: `http://picsum.photos/300/150?r=${Math.random()}`,
  date: {
    start: Date.now(),
    end: Date.now() + 1 + Math.floor(Math.random() * 7) * MS_IN_DAY
  },
  duration: Date.now(),
  price: 10 + Math.floor(Math.random() * 100),
  description: TEXT.split(`.`).splice(1, Math.floor(Math.random() * 3))
},
{
  type: [{
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
  },
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
  offers: [
    `Add luggage`,
    `Add meal`,
  ],
  pictureURL: `http://picsum.photos/300/150?r=${Math.random()}`,
  date: {
    start: Date.now(),
    end: Date.now() + 1 + Math.floor(Math.random() * 7) * MS_IN_DAY
  },
  duration: Date.now(),
  price: 10 + Math.floor(Math.random() * 100),
  description: TEXT.split(`.`).splice(1, Math.floor(Math.random() * 3))
}
];

export const filters = [{
  caption: `Everything`
},
{
  caption: `Future`
},
{
  caption: `Past`
}
];
