import {
  Component
} from "./component";
import {
  API
} from './api';

import moment from 'moment';
import flatpickr from "flatpickr";

const TYPE = {
  'taxi': [`🚕`,
    `Taxi to`
  ],
  'bus': [
    `🚌`,
    `Bus to`
  ],
  'train': [
    `🚂`,
    `Train to`
  ],
  'ship': [`🛳️`,
    `Ship to`
  ],
  'transport': [`🚊`,
    `Transport to`
  ],
  'drive': [`🚗`,
    `Drive to`
  ],
  'flight': [
    `✈️`,
    `Flight to`
  ],
  'check-in': [
    `🏨`,
    `Check-in`
  ],
  'sightseeing': [
    `🏛️`,
    `Sightseeing`
  ],
  'restaurant': [
    `🍴`,
    `Restaurant in`
  ]
};

export class PointEdit extends Component {
  constructor(data) {
    super();
    this._id = data.id;
    this._title = data.destination.name;
    this._description = data.destination.description;
    this._place = data.place;
    this._dateStart = data.date_from;
    this._dateEnd = data.date_to;
    this._type = data.type;
    this._price = data.base_price;
    this._offers = data.offers;
    this._isFavotite = data.is_favorite;

    this._onSubmit = null;
    this._onDelete = null;
    this._onSubmitClick = this._onSubmitClick.bind(this);
    this._onDeleteClick = this._onDeleteClick.bind(this);
  }

  _processForm(formData) {
    const entry = {
      price: ``,
      place: ``
    };

    const pointEditMapper = PointEdit.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      // console.log(pair);
      // eslint-disable-next-line no-unused-expressions
      pointEditMapper[property] && pointEditMapper[property](value);
    }

    return entry;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  set onDelete(fn) {
    this._onDelete = fn;
  }

  _onSubmitClick(evt) {
    evt.preventDefault();
    const formData = new FormData(this._element.querySelector(`.point__form`));
    const newData = this._processForm(formData);
    // eslint-disable-next-line no-unused-expressions
    typeof this._onSubmit === `function` && this._onSubmit(newData);
    this.update(newData);
  }

  _onDeleteClick(evt) {
    evt.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    typeof this._onDelete === `function` && this._onDelete({
      id: this._id
    });
  }

  get template() {
    return `
        <article class="point">
          <form method="get" class="point__form">
            <header class="point__header">
              <label class="point__date">
                choose day
                <input class="point__input point__input--day" type="text" placeholder="MAR 18" name="day">
              </label>

              <div class="travel-way">
                <label class="travel-way__label" for="travel-way__toggle">${TYPE[this._type][0]}
                </label>

                <input type="checkbox" class="travel-way__toggle visually-hidden" id="travel-way__toggle">

                <div class="travel-way__select">
                  <div class="travel-way__select-group">
                    <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-taxi" name="travel-way" value="taxi">
                    <label class="travel-way__select-label" for="travel-way-taxi">🚕 taxi</label>

                    <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-bus" name="travel-way" value="bus">
                    <label class="travel-way__select-label" for="travel-way-bus">🚌 bus</label>

                    <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-train" name="travel-way" value="train">
                    <label class="travel-way__select-label" for="travel-way-train">🚂 train</label>

                    <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-flight" name="travel-way" value="train" checked>
                    <label class="travel-way__select-label" for="travel-way-flight">✈️ flight</label>
                  </div>

                  <div class="travel-way__select-group">
                    <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-check-in" name="travel-way" value="check-in">
                    <label class="travel-way__select-label" for="travel-way-check-in">🏨 check-in</label>

                    <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-sightseeing" name="travel-way" value="sight-seeing">
                    <label class="travel-way__select-label" for="travel-way-sightseeing">🏛 sightseeing</label>
                  </div>
                </div>
              </div>

              <div class="point__destination-wrap">
                <label class="point__destination-label" for="destination">${TYPE[this._type][1]}</label>
                <input class="point__destination-input" list="destination-select" id="destination" value="${this._title
}" name="destination">
                <datalist id="destination-select">
                  <option value="airport"></option>
                  <option value="Geneva"></option>
                  <option value="Chamonix"></option>
                  <option value="hotel"></option>
                </datalist>
              </div>

              <div class="point__time">
                choose time
                <input class="point__input point__input--start" type="text" value="${moment(this._dateStart).format(`HH:mm`)}" name="date-start" placeholder="19:00">
                <input class="point__input point__input--end" type="text" value="${moment(this._dateEnd).format(`HH:mm`)}" name="date-end" placeholder="21:00">
              </div>

              <label class="point__price">
                write price
                <span class="point__price-currency">€</span>
                <input class="point__input" type="text" value="${this._price}" name="price">
              </label>

              <div class="point__buttons">
                <button class="point__button point__button--save" type="submit">Save</button>
                <button class="point__button point__button--delete" type="reset">Delete</button>
              </div>

              <div class="paint__favorite-wrap">
                <input type="checkbox" class="point__favorite-input visually-hidden" id="favorite" name="favorite" ${this._isFavotite ? `checked` : ``}>
                <label class="point__favorite" for="favorite">favorite</label>
              </div>
            </header>

            <section class="point__details">
              <section class="point__offers">
                <h3 class="point__details-title">offers</h3>

                <div class="point__offers-wrap">
                  <input class="point__offers-input visually-hidden" type="checkbox" id="add-luggage" name="offer" value="add-luggage">
                  <label for="add-luggage" class="point__offers-label">
                    <span class="point__offer-service">Add luggage</span> + €<span class="point__offer-price">30</span>
                  </label>

                  <input class="point__offers-input visually-hidden" type="checkbox" id="switch-to-comfort-class" name="offer" value="switch-to-comfort-class">
                  <label for="switch-to-comfort-class" class="point__offers-label">
                    <span class="point__offer-service">Switch to comfort class</span> + €<span class="point__offer-price">100</span>
                  </label>

                  <input class="point__offers-input visually-hidden" type="checkbox" id="add-meal" name="offer" value="add-meal">
                  <label for="add-meal" class="point__offers-label">
                    <span class="point__offer-service">Add meal </span> + €<span class="point__offer-price">15</span>
                  </label>

                  <input class="point__offers-input visually-hidden" type="checkbox" id="choose-seats" name="offer" value="choose-seats">
                  <label for="choose-seats" class="point__offers-label">
                    <span class="point__offer-service">Choose seats</span> + €<span class="point__offer-price">5</span>
                  </label>
                </div>

              </section>
              <section class="point__destination">
                <h3 class="point__details-title">Destination</h3>
                <p class="point__destination-text">${this._description}</p>
                <div class="point__destination-images">
                  <img src="http://picsum.photos/330/140?r=123" alt="picture from place" class="point__destination-image">
                  <img src="http://picsum.photos/300/200?r=1234" alt="picture from place" class="point__destination-image">
                  <img src="http://picsum.photos/300/100?r=12345" alt="picture from place" class="point__destination-image">
                  <img src="http://picsum.photos/200/300?r=123456" alt="picture from place" class="point__destination-image">
                  <img src="http://picsum.photos/100/300?r=1234567" alt="picture from place" class="point__destination-image">
                </div>
              </section>
              <input type="hidden" class="point__total-price" name="total-price" value="">
            </section>
          </form>
        </article>
    `.trim();
  }

  bind() {
    this._element
      .querySelector(`.point__form`)
      .addEventListener(`submit`, this._onSubmitClick);
    this._element
      .querySelector(`.point__form`)
      .addEventListener(`reset`, this._onDeleteClick);

    flatpickr(`.point__input--day`, {
      altInput: true,
      altFormat: `j F`,
      dateFormat: `j F`
    });
    flatpickr(`.point__input--start`, {
      enableTime: true,
      noCalendar: true,
      altInput: true,
      altFormat: `h:i K`,
      dateFormat: `h:i K`
    });
    flatpickr(`.point__input--end`, {
      enableTime: true,
      noCalendar: true,
      altInput: true,
      altFormat: `h:i K`,
      dateFormat: `h:i K`
    });
  }

  unbind() {
    this._element
      .querySelector(`.point__form`)
      .removeEventListener(`submit`, this._onSubmitClick);
    this._element
      .querySelector(`.point__form`)
      .removeEventListener(`reset`, this._onDeleteClick);
  }

  update(data) {
    this._price = data.price;
  }

  static createMapper(target) {
    return {
      price: (value) => (target.price = value)
    };
  }
}
