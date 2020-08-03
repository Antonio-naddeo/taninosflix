import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAll() {
  // eslint-disable-next-line no-console
  console.log(config.URL_BACKEND);
  return fetch(URL_CATEGORIAS)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível conectar ao servidor');
    });
}

function getAllWithVideos() {
  // eslint-disable-next-line no-console
  console.log(config.URL_BACKEND);
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível conectar ao servidor');
    });
}

function createCategory(objDaCategoria) {
  // eslint-disable-next-line no-console
  return fetch(URL_CATEGORIAS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objDaCategoria),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível conectar ao servidor');
    });
}

export default {
  getAllWithVideos,
  getAll,
  createCategory,
};
