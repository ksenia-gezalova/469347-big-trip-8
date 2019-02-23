export const getPoint = (point) => {
  return `<article class="trip-point">
  <i class="trip-icon">🚕</i>
  <h3 class="trip-point__title">${point.title}</h3>
  <p class="trip-point__schedule">
    <span class="trip-point__timetable">${point.date.start}&nbsp;&mdash; ${point.date.end}</span>
    <span class="trip-point__duration">${point.duration}</span>
  </p>
  <p class="trip-point__price">&euro;&nbsp;${point.price}</p>
  <ul class="trip-point__offers">
    <li>
      <button class="trip-point__offer">Order UBER +&euro;&nbsp;20</button>
    </li>
    <li>
      <button class="trip-point__offer">Upgrade to business +&euro;&nbsp;20</button>
    </li>
  </ul>
</article>`;
};
