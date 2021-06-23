import React, { useMemo } from "react";
import { useTable } from "react-table";
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
  return (
    <>
      <Headline> Ziele </Headline>

      <FooterNavigation />
    </>
  );
}

const Headline = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
`;
