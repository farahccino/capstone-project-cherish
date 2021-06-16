import styled from 'styled-components/macro';

import HabitForm from '../components/HabitForm';
import FooterNavigation from '../components/FooterNavigation';



export default function Plus({onAddHabit}) {



  return (
    <>
     <h1> This is the plus page! </h1>
     <HabitForm onAddHabit={onAddHabit} />
     <FooterNavigation />
    </>
  );
}