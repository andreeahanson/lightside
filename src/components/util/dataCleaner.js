const cleanUpData = initialData => {
  const relevantData = initialData.results.map(object => {
    return {
      created: object.created || null,
      title: object.title || null,
      name: object.name || null,
      birth_year: object.birth_year || null,
      gender: object.gender || null,
      height: object.height || null,
      hair_color: object.hair_color || null,
      terrain: object.terrain || null,
      diameter: object.diameter || null,
      population: object.population || null,
      model: object.model || null,
      vehicle_class: object.vehicle_class || null,
      passengers: object.passengers || null,
      opening_crawl: object.opening_crawl || null,
      release_date: object.release_date || null
    };
  });
  return { ...initialData, results: relevantData };
};

export default cleanUpData;
