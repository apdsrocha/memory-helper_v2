import { SAVE_ENTRY, GET_ENTRIES, DELETE_ENTRIES } from "../actions/action";

const initialState = [
  {
    id: 0,
    location: "",
    keyword: "",
    description: "",
    weather: {},
    date: "",
  },
];

function reducer(state = initialState, action) {
  if (action.type === SAVE_ENTRY) {
    return [
      ...state,
      {
        id: action.payload.id,
        keyword: action.payload.keyword,
        location: action.payload.location,
        description: action.payload.description,
        weather: action.payload.weather,
        date: action.payload.date,
      },
    ];
  } else if (action.type === GET_ENTRIES) {
    return {
      ...state,
    };
  } else if (action.type === DELETE_ENTRIES) {
      return state.filter((item, index) => index !== parseInt(action.payload.id));
  }
  return state;
}

export { reducer };
