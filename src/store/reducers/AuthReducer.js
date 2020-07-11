const initialState = {
  nomeCompleto: '',
  email: '',
  CNPJ: '',
  password: '',
  logado: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'setEmail':
      return { ...state, email: action.payload.email };

    case 'setPassword': {
      return { ...state, password: action.payload.password };
    }

    case 'setCNPJ': {
      return { ...state, CNPJ: action.payload.CNPJ };
    }

    case 'setNomeCompleto': {
      return { ...state, nomeCompleto: action.payload.nomeCompleto };
    }

    case 'setLogado': {
      return { ...state, logado: action.payload.logado };
    }

    default:
      return state;
  }
};
