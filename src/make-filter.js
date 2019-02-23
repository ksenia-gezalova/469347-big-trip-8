const getFilter = (filter) => {
  return ` <input type="radio" id="filter-${filter.caption.toLowerCase()}" name="filter" value="${filter.caption.toLowerCase()}" ${filter.isChecked ? `checked` : ``}>
  <label class="trip-filter__item" for="filter-${filter.caption.toLowerCase()}">${filter.caption}</label>`;
};

export default getFilter;
