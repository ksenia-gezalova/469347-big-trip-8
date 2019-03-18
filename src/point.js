import {
  createElement
} from './create-element';

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

export class Point {
  constructor(data) {
    this._title = data.title;
    this._dateStart = data.date.start;
    this._dateEnd = data.date.end;
    this._type = data.type.train;
    this._duration = data.duration;
    this._price = data.price;
    this._offers = data.offers;

    this._element = null;

    this._onEdit = null;
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get element() {
    return this._element;
  }

  _onEditButtonClick() {
    // eslint-disable-next-line no-unused-expressions
    typeof this._onEdit === `function` && this._onEdit();

  }

  get template() {
    return `<article class="trip-point">
                <i class="trip-icon">${this._type}</i>
                <h3 class="trip-point__title">${this._title}</h3>
                <p class="trip-point__schedule">
                  <span class="trip-point__timetable">${getFormattedTime(this._dateStart)}&nbsp;&mdash; ${getFormattedTime(this._dateEnd)}</span>
                  <span class="trip-point__duration">${getFormattedDate(this._duration)}</span>
                </p>
                <p class="trip-point__price">&euro;&nbsp;${this._price}</p>
                <ul class="trip-point__offers">
                ${this._offers.map(getOffer).join(``)}
                </ul>
            </article>`.trim();
  }

  bind() {
    this._element.querySelector(`.trip-icon`).addEventListener(`click`, this._onEditButtonClick);
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unbind() {
    this._element.querySelector(`.trip-icon`)
      .removeEventListener(`click`, this._onEditButtonClick);
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}
