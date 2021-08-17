export const createSiteInfoTemplate = (data) => {
  const listTowns = [];
  const listDate = [];
  for (const variable of data) {
    if (!listTowns.includes(variable.destination)){
      listTowns.push(variable.destination);
    }
    if (!listDate.includes(variable.dateTo)){
      listDate.push(variable.dateTo);
    }
    if (!listDate.includes(variable.dateFrom)){
      listDate.push(variable.dateFrom);
    }
  }
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${listTowns[0]} &mdash; ${listTowns[1]} &mdash; ${listTowns.slice(-1)[0]}</h1>

    <p class="trip-info__dates">${listDate.sort()[0]}&nbsp;&mdash;&nbsp;${listDate.sort().slice(-1)[0]}</p>
  </div>

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>
</section>`;
};
