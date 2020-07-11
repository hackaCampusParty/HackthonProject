export const setEmail = (email) => ({
  type: 'setEmail',
  payload: {
    email,
  },
});

export const setPassword = (password) => ({
  type: 'setPassword',
  payload: {
    password,
  },
});

export const setNomeCompleto = (nomeCompleto) => ({
  type: 'setNomeCompleto',
  payload: {
    nomeCompleto,
  },
});

export const setCNPJ = (CNPJ) => ({
  type: 'setCNPJ',
  payload: {
    CNPJ,
  },
});

export const setLogado = (logado) => ({
  type: 'setLogado',
  payload: {
    logado,
  },
});
