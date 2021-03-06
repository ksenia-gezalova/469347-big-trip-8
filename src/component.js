import {
  createElement
} from './create-element';

export class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
    this._element = null;
    this._state = {};
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  bind() {}

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unbind() {}

  unrender() {
    this.unbind();
    this._element = null;
  }

  update() {}
}
