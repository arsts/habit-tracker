import React from "react";
import Habits from "./Habits";
import { compose } from "redux";
import { connect } from "react-redux";
import { addHabit } from "../../redux/habits-reducer";

const HabitsContainer = ({ addHabit, habits }) => {
  return <Habits addHabit={addHabit} habits={habits} />;
};

const mapStateToProps = state => {
  return { habits: state.habitsReducer.habits };
};

export default compose(connect(mapStateToProps, { addHabit }))(HabitsContainer);
