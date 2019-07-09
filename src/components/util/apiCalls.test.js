import getData from './apiCalls';

describe('getData', () => {
  let mockData;
  let urls;
  let status=true;

  beforeEach(() => {
    mockData = {
      title: 'people',
      results: [
        { name: 'Colon', height: true },
        { name: 'Colons', height: false }
      ]
    };

    urls = [{ title: 'people', link: 'https://swapi.co/api/people/' }];

  });
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: status,
      json: () => Promise.resolve(mockData)
    });
  });
  
  it('should be called with correct URL', () => {
    getData(urls);
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people/');
  });

  it('HAPPY: should return a parsed response', async () => {
    const result = await getData(urls);

    const expected = [
      {
        results: [
          {
            birth_year: null,
            created: null,
            diameter: null,
            gender: null,
            hair_color: null,
            height: true,
            model: null,
            name: 'Colon',
            opening_crawl: null,
            passengers: null,
            population: null,
            release_date: null,
            terrain: null,
            title: null,
            vehicle_class: null
          },
          {
            birth_year: null,
            created: null,
            diameter: null,
            gender: null,
            hair_color: null,
            height: null,
            model: null,
            name: 'Colons',
            opening_crawl: null,
            passengers: null,
            population: null,
            release_date: null,
            terrain: null,
            title: null,
            vehicle_class: null
          }
        ],
        title: 'people'
      }
    ];

    expect(result).toEqual(expected);
  });

  it('SAD: should throw error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    await expect(getData()).rejects.toEqual(Error('Error'))
  })
});
