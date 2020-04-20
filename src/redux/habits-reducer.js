const ADD_HABIT = "habit-tracker/habits/ADD_HABIT";

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
};

export default function habitsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HABIT:
      console.log(action.payload);
      return Object.assign({}, state, {
        habits: [...state.habits, action.payload],
      });

    default:
      return state;
  }
}

export const addHabit = (newHabit) => ({
  type: ADD_HABIT,
  payload: newHabit,
});
