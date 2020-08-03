import config from '../config';

const URL_FORMACOES = `${config.URL_ALURA}/api/formacoes`;
const URL_IMAGENS = `${config.URL_ALURA}/assets/api/formacoes/categorias`;

let formacoes;
const categoriasCad = [];

function getCursosAlura() {
  return fetch(URL_FORMACOES)
    .then(async (r) => {
      if (r.ok) {
        const response = await r.json();
        formacoes = response.filter((formacao) => {
          if (categoriasCad.includes(formacao.categoryName)) {
            return false;
          }

          categoriasCad.push(formacao.categoryName);
          return true;
        });
        return formacoes.map((formacao) => ({
          categoriaId:5000,
          titulo: formacao.categoryName,
          urlImage: `${URL_IMAGENS}/${formacao.categoryUrlName}.svg`,
          url: `${config.URL_ALURA}/cursos-online-${formacao.categoryUrlName}`,
          id: formacao.id + 5000,
        }));
      }
      throw new Error('Não foi possível conectar ao servidor da Alura');
    });
}

export default {
  getCursosAlura,
};
