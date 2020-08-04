const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://taninosflix-backend.herokuapp.com';

const URL_ALURA= 'https://www.alura.com.br';
export default {
  URL_BACKEND,
  URL_ALURA,
};

