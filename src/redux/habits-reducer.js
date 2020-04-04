const ADD_HABIT = "habit-tracker/habits/ADD_HABIT";

//Initialise state
const initialState = {
  habits: [
    {
      name: "Read books",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Study React",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Workout",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    },
    {
      name: "Go to bed at 00:00",
      description: "lorem ipsum dolor sit amet",
      startDate: "",
      endDate: "",
      daysOfWeek: "",
      metric: ""
    }
  ]
};

export default function habitsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HABIT:
      return Object.assign({}, state, {
        habits: [
          ...state.habits,
          {
            name: "Go to bed at 00:00",
            description: "lorem ipsum dolor sit amet",
            startDate: "",
            endDate: "",
            daysOfWeek: "",
            metric: ""
          }
        ]
      });

    default:
      return state;
  }
}

export const addHabit = newHabit => ({
  type: ADD_HABIT,
  newHabit
});
