'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// function getCountryData( name) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
//   request.send();

//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);
//     console.log(data);
//     const [...neighbour] = data.borders;
//     console.log(neighbour);
//     if (!neighbour) return;
//     neighbour.forEach(ner => {
//       const req = new XMLHttpRequest();
//       req.open('GET', `https://restcountries.com/v3.1/alpha/${ner}`);
//       req.send();
//       req.addEventListener('load', function() {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);
//       renderCountry(data, 'neighbour');
//     });
//     });
//   })
// }
// getCountryData('australia');

// function getCountry(name) {
//   // fetch(`https://restcountries.com/v3.1/name/${name}`).then(function(response) {
//   //   return response.json();
//   // }).then(function(res) {
//   //   const [data] = res;
//   //   console.log(data);
//   // });

//   fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Country Not Found! (${res.status})`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       const country = data[0];
//       renderCountry(country);
//       // const neighbour = country.borders?.at(0);
//       const neighbour = '1213141'
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Country Not Found! (${res.status})`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong. ${err.message} Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

// function getJSON(url, errMsg) {
//   return fetch(url).then(res => {
//     if (!res.ok) {
//       throw new Error(`${errMsg} (${res.status}) Try Again.`);
//     }
//     return res.json();
//   });
// }

// function getCountry(name) {
//   getJSON(`https://restcountries.com/v3.1/name/${name}`, 'Country Not Found!')
//     .then(data => {
//       const country = data[0];
//       renderCountry(country);
//       const neighbour = country.borders?.at(0);

//       if (!neighbour) throw new Error('No neighbour found!');

//       // const neighbour = '1213141'
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country Not Found!'
//       );
//     })
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

// btn.addEventListener('click', function () {
//   getCountry(`India`);
// });

// const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

// wait(2).then(() => {
//   console.log('After 2 seconds.');
//   return wait(1);
// })
// .then(() => {
//   console.log('After 3 seconds.')
//   return wait(2)
// }).then(() => {
//   console.log('After 5 seconds.');
// });

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: lon } = pos.coords;

  const resGeo = await fetch(
    `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`
  );
  const dataGeo = await resGeo.json();

  console.log(dataGeo);

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
  );
  const data = await res.json();

  console.log(data[0].borders[0]);
  renderCountry(data[0]);

  const resNbr = await fetch(
    `https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`
  );
  const dataNbr = await resNbr.json();
  renderCountry(dataNbr[0], 'neighbour');
  console.log(dataNbr[0]);
};

// https://geocode.maps.co/reverse?lat={latitude}&lon={longitude}

btn.addEventListener('click', whereAmI);

function getJSON(url, errMsg) {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errMsg} (${res.status}) Try Again.`);
    }
    return res.json();
  });
}

async function getCountries(c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);
    
    // Promise.all() uses short circuiting
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    data.forEach(d => console.log(d[0].capital));
    console.log(data.map(d => d[0].capital[0]));
    

  } catch (err) {
    console.error(err);
  }
}

getCountries('india', 'usa', 'australia');
