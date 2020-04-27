const ADD_HABIT = "habit-tracker/habits/ADD_HABIT";
const SET_SEARCH_TERM = "habit-tracker/habits/SET_SEARCH_TERM";

//Initialise state
const initialState = {
  habits: [
    {
      id: 1,
      name: "Read books",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: "",
    },
    {
      id: 2,
      name: "Study React",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: "",
    },
    {
      id: 3,
      name: "Workout",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: "",
    },
    {
      id: 4,
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: "",
    },
  ],
  searchTerm: "",
};

export default function habitsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HABIT:
      return Object.assign({}, state, {
        habits: [...state.habits, action.payload],
      });
    case SET_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.payload,
      });
    default:
      return state;
  }
}

export const addHabit = (newHabit) => ({
  type: ADD_HABIT,
  payload: newHabit,
});

export const setSeachTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});
