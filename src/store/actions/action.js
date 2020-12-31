export const SAVE_ENTRY = "SAVE_ENTRY";
export const GET_ENTRIES = "GET_ENTRIES";

export function saveEntry(location, keyword, description, id, weather, date) {
  return {
    type: SAVE_ENTRY,
    payload: {
      id: id,
      location: location,
      keyword: keyword,
      description: description,
      weather: weather,
      date: date,
    },
  };
}

export function getEntries() {
  return {
    type: GET_ENTRIES,
  };
}
