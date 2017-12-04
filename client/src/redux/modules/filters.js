const initialState = {
  filters: []
};

export const filterItems = tags => {
  return { type: "GET_FILTERED_TAGS", tags };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_FILTERED_TAGS":
      return {
        ...state,
        filters: action.tags
      };
    default:
      return state;
  }
};
