import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FooterNavigation from "../components/FooterNavigation";

export default function Goals({
  habits,
  setHabits,
  id,
  habitToEdit,
  onSetHabitToEdit,
  setActivePage,
  onEditHabit,
}) {
  const checkbox = (value) => {
    return (
      <div>
        <input type="checkbox" />
        <span id={id}>{value}</span>
      </div>
    );
  };

  return (
    <>
      <h1> This is the goals page! </h1>

      <div>
        {habits.map((habit) => {
          return checkbox(habit.ziel);
        })}
      </div>

      <FooterNavigation />
    </>
  );
}
