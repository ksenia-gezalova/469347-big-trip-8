const getFormattedDate = (milliseconds) => {
  const date = new Date(milliseconds);
  return `${date.toLocaleString(`en-US`, {day: `2-digit`})} ${date.toLocaleString(`en-US`, {month: `long`})}`;
};

const getFormattedTime = (milliseconds) => `${(new Date(milliseconds)).toLocaleString(`en-US`, {hour12: true, hour: `2-digit`, minute: `2-digit`})}`;

const getOffer = (offer) => {
  return `
    <li>
      <button class="trip-point__offer">${offer} +&euro;&nbsp;20</button>
    </li>`;
};

export const getPoint = (point) => {
  return `<article class="trip-point">
  <i class="trip-icon">${point.type.train}</i>
  <h3 class="trip-point__title">${point.title}</h3>
  <p class="trip-point__schedule">
    <span class="trip-point__timetable">${getFormattedTime(point.date.start)}&nbsp;&mdash; ${getFormattedTime(point.date.end)}</span>
    <span class="trip-point__duration">${getFormattedDate(point.duration)}</span>
  </p>
  <p class="trip-point__price">&euro;&nbsp;${point.price}</p>
  <ul class="trip-point__offers">
  ${point.offers.map(getOffer).join(``)}
  </ul>
</article>`;
};
