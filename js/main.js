async function fetchAsyncAwaitAndShow(url = 'https://rickandmortyapi.com/api/character/?') {//'https://rickandmortyapi.com/api/character/?page=1') {
  //let response = await fetch('https://rickandmortyapi.com/api/character/?page=' + page + '&name=rick');
  let response = await fetch(url);
  let result = await response.json();
  //console.log(result);
  if (result.results != undefined) {
    for (let character of result.results) {
      let newChar = document.createElement('div');
      newChar.setAttribute('id', character.id);
      document.querySelector('main').appendChild(newChar);

      let image = document.createElement('img');
      image.setAttribute('src', character.image);
      image.setAttribute('class', 'characterImage');
      document.getElementById(character.id).appendChild(image);

      let name = document.createElement('p');
      name.setAttribute('class', 'characterName');
      name.textContent = character.name + ' (' + character.species + ')';
      document.getElementById(character.id).appendChild(name);

      let status = document.createElement('p');
      status.setAttribute('class', 'characterStatus_' + character.status);
      status.textContent = character.status;
      document.getElementById(character.id).appendChild(status);
    }
  }
}




function doSearch() {
  page = 1;
  const searchText = document.getElementById('search').value;
  removeMainContent();
  let url = 'https://rickandmortyapi.com/api/character/?status=' + getStatusFilter() + '&species=' + getSpecieFilter()
      + '&name=' + searchText;
  fetchAsyncAwaitAndShow(url);
}




// FILTERS
// status filter
function statusFilter(status) {
  page = 1;
  const searchText = document.getElementById('search').value;
  const specieFilter = getSpecieFilter();

  removeMainContent();

  if (status == 'alive' && document.getElementById('statusFilterAlive').checked)
    desactivateStatusFilters('alive');
  else if (status == 'dead' && document.getElementById('statusFilterDead').checked)
    desactivateStatusFilters('dead');
  else if (status == 'unknown' && document.getElementById('statusFilterUnknown').checked)
    desactivateStatusFilters('unknown');
  else {
    status = '';
    desactivateStatusFilters();
  }

  fetchAsyncAwaitAndShow('https://rickandmortyapi.com/api/character/?status=' + status + '&species=' + specieFilter
    + '&name=' + searchText);
}
// species filter
function specieFilter(specie) {
  page = 1;
  const searchText = document.getElementById('search').value;
  const specieFilter = getSpecieFilter();
  console.log(specieFilter);
  const statusFilter = getStatusFilter();

  removeMainContent();

  if (specie == 'human' && document.getElementById('specieFilterHumanoid').checked)
    desactivateSpeciesFilters('humanoid');
  else if (specie == 'alien' && document.getElementById('specieFilterAlien').checked)
    desactivateSpeciesFilters('alien');
  else if (specie == 'robot' && document.getElementById('specieFilterRobot').checked)
    desactivateSpeciesFilters('robot');
  else if (specie == 'mythological' && document.getElementById('specieFilterMythologicalCreature').checked)
    desactivateSpeciesFilters('mythological');
  else if (specie == 'poopybutthole' && document.getElementById('specieFilterPoopybutthole').checked)
    desactivateSpeciesFilters('poopybutthole');
  else if (specie == 'cronenberg' && document.getElementById('specieFilterCronenberg').checked)
    desactivateSpeciesFilters('cronenberg');
  else if (specie == 'disease' && document.getElementById('specieFilterDisease').checked)
    desactivateSpeciesFilters('disease');
  else if (specie == 'unknown' && document.getElementById('specieFilterUnknown').checked)
    desactivateSpeciesFilters('unknown');
  else {
    specie = '';
    desactivateSpeciesFilters();
  }

  fetchAsyncAwaitAndShow('https://rickandmortyapi.com/api/character/?status=' + statusFilter + '&species=' + specie
    + '&name=' + searchText);
}



// remove main content
function removeMainContent() {
  let mainSection = document.getElementsByClassName('main')[0];
  while (mainSection.childElementCount > 0)
    mainSection.removeChild(mainSection.childNodes[0]);
}



// DESACTIVATE FILTERS
// desactivate status filters
function desactivateStatusFilters(check = "") {
  if (check == '') {
    document.getElementById('statusFilterAlive').checked = false;
    document.getElementById('statusFilterDead').checked = false;
    document.getElementById('statusFilterUnknown').checked = false;
  } else {
    if (check == 'alive') {
      desactivateStatusFilters();
      document.getElementById('statusFilterAlive').checked = true;
    } else if (check == 'dead') {
      desactivateStatusFilters();
      document.getElementById('statusFilterDead').checked = true;
    } else if (check == 'unknown') {
      desactivateStatusFilters();
      document.getElementById('statusFilterUnknown').checked = true;
    }
  }
}
// desactivate species filters
function desactivateSpeciesFilters(check = '') {
  if (check == '') {
    document.getElementById('specieFilterHumanoid').checked = false;
    document.getElementById('specieFilterAlien').checked = false;
    document.getElementById('specieFilterRobot').checked = false;
    document.getElementById('specieFilterMythologicalCreature').checked = false;
    document.getElementById('specieFilterPoopybutthole').checked = false;
    document.getElementById('specieFilterCronenberg').checked = false;
    document.getElementById('specieFilterDisease').checked = false;
    document.getElementById('specieFilterUnknown').checked = false;
  } else {
    if (check == 'humanoid') {
      desactivateSpeciesFilters();
      document.getElementById('specieFilterHumanoid').checked = true;
    } else if (check == 'alien') {
      desactivateSpeciesFilters();
      document.getElementById('specieFilterAlien').checked = true;
    } else if (check == 'robot') {
      desactivateSpeciesFilters();
      document.getElementById('specieFilterRobot').checked = true;
    } else if (check == 'mythological') {
      desactivateSpeciesFilters();
      document.getElementById('specieFilterMythologicalCreature').checked = true;
    } else if (check == 'poopybutthole') {
      desactivateSpeciesFilters();
      document.getElementById('specieFilterPoopybutthole').checked = true;
    } else if (check == 'cronenberg') {
      desactivateSpeciesFilters();
      document.getElementById('specieFilterCronenberg').checked = true;
    } else if (check == 'disease') {
      desactivateSpeciesFilters();
      document.getElementById('specieFilterDisease').checked = true;
    } else if (check == 'unknown') {
      desactivateSpeciesFilters();
      document.getElementById('specieFilterUnknown').checked = true;
    }
  }
}



// KEEP FILTERS
// keep status filter
function getStatusFilter() {
  if (document.getElementById('statusFilterAlive').checked) return 'alive';
  if (document.getElementById('statusFilterDead').checked) return 'dead';
  if (document.getElementById('statusFilterUnknown').checked) return 'unknown';
  return '';
}
// keep species filter
function getSpecieFilter() {
  if (document.getElementById('specieFilterHumanoid').checked) return 'human';
  if (document.getElementById('specieFilterAlien').checked) return 'alien';
  if (document.getElementById('specieFilterRobot').checked) return 'robot';
  if (document.getElementById('specieFilterMythologicalCreature').checked) return 'mythological';
  if (document.getElementById('specieFilterPoopybutthole').checked) return 'poopybutthole';
  if (document.getElementById('specieFilterCronenberg').checked) return 'cronenberg';
  if (document.getElementById('specieFilterDisease').checked) return 'disease';
  if (document.getElementById('specieFilterUnknown').checked) return 'unknown';
  return '';
}



// INFINITE SCROLL
let page = 1;
let loading = false;
function loadMore() {
  if (loading) return;
  loading = true;
  const searchText = document.getElementById('search').value;
  fetchAsyncAwaitAndShow('https://rickandmortyapi.com/api/character/?page=' + ++page + '&status=' + getStatusFilter()
      + '&species=' + getSpecieFilter() + '&name=' + searchText);
  loading = false;
}
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 0)
    loadMore();
});










