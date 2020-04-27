import React from "react";
import Habits from "./Habits";
import { compose } from "redux";
import { connect } from "react-redux";
import { addHabit, setSeachTerm } from "../../redux/habits-reducer";

const HabitsContainer = ({
  addHabit,
  habits,
  setSeachTerm,

  searchTerm,
  filteredHabits,
}) => {
  return (
    <Habits
      addHabit={addHabit}
      setSeachTerm={setSeachTerm}
      habits={habits}
      searchTerm={searchTerm}
      filteredHabits={filteredHabits}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    habits: state.habitsReducer.habits,
    filteredHabits: state.habitsReducer.habits.filter((habit) =>
      habit.name.includes(state.habitsReducer.searchTerm)
    ),
    searchTerm: state.habitsReducer.searchTerm,
  };
};

export default compose(connect(mapStateToProps, { addHabit, setSeachTerm }))(
  HabitsContainer
);
