const database = [
  {
    carName: 'Ford',
    carPrice: 17000,
    carCode: 'FD',
  },
  {
    carName: 'Toyota',
    carPrice: 17000,
    carCode: 'TY',
  },
  {
    carName: 'Vauxhall',
    carPrice: 17000,
    carCode: 'VX',
  },
  {
    carName: 'Mercedes',
    carPrice: 17000,
    carCode: 'MC',
  },
  {
    carName: 'Volkswagen',
    carPrice: 17000,
    carCode: 'VW',
  },
];

// Selects element passed in
function selectElement(selector) {
  return document.querySelector(selector);
}

// Clears content inside search-results div
function clearResults() {
  selectElement('.search-results').innerHTML = '';
}

function getResults() {
  const search = selectElement('.searchbar').value;

  clearResults();
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].carName
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()) ||
      database[i].carCode
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    ) {
      selectElement('.search-results').innerHTML += `

        <div class="search-results-item">
          <span class="search-item">${database[i].carName}</span>
          <span class="search-item">${database[i].carPrice}</span>
          <span class="search-item">${database[i].carCode}</span>
        </div>
      `;
    }
  }
}

selectElement('.searchbar').addEventListener('keyup', getResults);
