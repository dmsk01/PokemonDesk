import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  return fetch(uri).then((res) => res.json());
}

export default req;

// const req = async (endpoint: string) => {
//   const uri = Url.format(getUrlWithParamsConfig(endpoint));

//   return await fetch(uri).then((res) => res.json());
// };

// export default req;
