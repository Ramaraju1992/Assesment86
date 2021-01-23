/**
 * Router Reducer
 */

// Set initial state
const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'DATA_LIST': {
      if (action.data) {
        const input = action.data;
        return {
          ...state,
          data_list: input,
        };
      }
      return {};
    }
    default:
      return state;
  }
}
