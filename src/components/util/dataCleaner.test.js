import cleanUpData from './dataCleaner';

describe('cleanUpData', () => {

  it('should standardize all data objects', () => {
    const dirtyData = {
      results: [
        {name: "Dirty", title:"Filthy"}
      ]
    }

    const expected = {
      results: [
        {
          birth_year: null,
          created: null,
          diameter: null,
          gender: null,
          hair_color: null,
          height: null,
          model: null,
          name: "Dirty",
          opening_crawl: null,
          passengers: null,
          population: null,
          release_date: null,
          terrain: null,
          title: "Filthy",
          vehicle_class: null,
        }
      ]
    }

    const cleanData = cleanUpData(dirtyData);

    expect(cleanData).toEqual(expected)
  })

})