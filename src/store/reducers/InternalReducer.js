const initialState = {
  collectPointsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'setCollectPointsList': {
      return { ...state, collectPointsList: action.payload.collectPointsList };
    }

    default:
      return state;
  }
};
