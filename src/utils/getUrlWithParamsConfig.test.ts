import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('should receive two arguments "getPokemons" and empty object and return object with the properties method="GET", uri object with props protocol,host, pathname and empty query as well as empty body', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('should receive two arguments "getPokemons" and {name: "Pikachu"} and return object with the properties method="GET", uri object with props protocol,host, pathname and query{name: "Pikachu"} as well as empty body', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('should receive two arguments "getPokemon" and {id: 25} and return object with the properties method="GET", uri object with props protocol,host, pathname and empty query as well as empty body', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  // Fake api tests

  test('should receive two arguments "createPokemon" and {id: 25,name:"Pikachu"} and return object with the properties method="POST", uri object with props pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: { name: 'Pikachu' },
    });
  });

  test('should receive two arguments "updatePokemon" and obj = {id: 25, name: "Raichu"} , and return object with the properties method="PATCH", uri object with props pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('updatePokemon', { id: 25, name: 'Raichu' });

    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: { name: 'Raichu' },
    });
  });

  test('should receive two arguments "deletePokemon" and {id: 25} and return object with the properties method="DELETE", uri object with props pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('deletePokemon', { id: 25 });

    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25/delete',
        query: {},
      },
      body: {},
    });
  });
});
