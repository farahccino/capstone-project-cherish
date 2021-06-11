import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HabitForm from '../components/HabitForm';
import FooterNavigation from '../components/FooterNavigation';

export default function Plus() {
  return (
    <>
     <h1> This is the plus page! </h1>
     <HabitForm />
     <FooterNavigation />
    </>
  );
}