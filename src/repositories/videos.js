import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;
function create(objDoVideo) {
  // eslint-disable-next-line no-console
  console.log(config.URL_BACKEND);
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objDoVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível conectar ao servidor');
    });
}

function destroy(id) {

  return fetch(`${URL_VIDEOS}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        console.log(resposta);
        return resposta;
      }

      throw new Error('Não foi possível conectar ao servidor');
    });
}

export default {
  create,
  destroy,
};
