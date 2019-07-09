import cleanUpData from './dataCleaner';

const getData = testUrls => {
  const tinyUrls = 'https://swapi.co/api/';
  const urls = testUrls || [
    { title: 'people', link: `${tinyUrls}people/` },
    { title: 'planets', link: `${tinyUrls}planets/` },
    { title: 'vehicles', link: `${tinyUrls}vehicles/` },
    { title: 'films', link: `${tinyUrls}films/` }
  ];
  const finalData = urls.map(url => {
    return fetch(url.link)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error('Error');
        }
      })
      .then(data => ({ ...data, title: url.title }))
      .then(initialData => cleanUpData(initialData));
  });
  return Promise.all(finalData);
};

export default getData;
