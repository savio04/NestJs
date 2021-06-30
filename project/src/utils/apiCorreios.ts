import axios from 'axios';

const api = axios.create({
  baseURL: 'https://correios.contrateumdev.com.br/api',
});

async function getAdress(cep: string) {
  const adress = await api.post('/cep', {
    cep,
  });

  return adress.data;
}

export default getAdress;
