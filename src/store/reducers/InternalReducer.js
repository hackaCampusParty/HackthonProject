const initialState = {
  pointsCollectList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'setPointsCollect': {
      return {
        ...state,
        pointsCollectList: action.payload.pointsCollectList,
      };
    }

    default:
      return state;
  }
};
