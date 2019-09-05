// start by grabbing DOM element you want to work on

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search states.json and filter it
const searchStates = async searchText => {
  const res = await fetch(`./data/states.json`);
  const states = await res.json();

  //   Get matches to current text input
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi'); //Regular expression, '^' means 'start with',
    // So what we are doing above is match the searchText(which is our input) with states
    // Second parameter(gi) means matching global(g) and insensitive(i) means it matches whether its uppercase or lowercase input

    return state.name.match(regex) || state.abbr.match(regex);
    // Above we are matching both state names or state abbreviation
  });

  //   After search we clear our matches array
  if (searchText.length == 0) {
    matches = [];
    matchList.innerHTML = '';
  }

  //   console.log(matches);
  outputHtml(matches);
};

// Show results in HTMl
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
            <div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</h4>
                <small>Lat: ${match.lat} / Long: ${match.long} </small>
            </div>
        `
      )
      .join('');

    matchList.innerHTML = html;
  }
};
search.addEventListener('input', () => searchStates(search.value));
