import {
  Component
} from './component';

import moment from 'moment';

const getOffer = (offer) => {
  return `
    <li>
      <button class="trip-point__offer">${offer} +&euro;&nbsp;20</button>
    </li>`;
};

export class Point extends Component {
  constructor(data) {
    super();
    this._title = data.type.caption + ` ` + data.place;
    this._place = data.place;
    this._dateStart = data.date.start;
    this._dateEnd = data.date.end;
    this._type = data.type.icon;
    this._duration = data.duration;
    this._price = data.price;
    this._offers = data.offers;

    this._onEdit = null;
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }

  set onEdit(fn) {
    this._onEdit = fn;
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
                  <span class="trip-point__timetable">${moment(this._dateStart).format(`LT`)}&nbsp;&mdash; ${moment(this._dateEnd).format(`LT`)}</span>
                  <span class="trip-point__duration">${moment(this._duration).format(`DD MMMM`)}</span>
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

  unbind() {
    this._element.querySelector(`.trip-icon`)
      .removeEventListener(`click`, this._onEditButtonClick);
  }

  update(data) {
    this._title = data.type.caption + ` ` + data.place;
    this._price = data.price;
  }
}
