import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styled from 'styled-components/macro';
import validateHabit from '../lib/validation';
import { saveToLocal, loadFromLocal } from '../lib/localStorage';


HabitForm.propTypes = {
    headlineText: PropTypes.string,
    onAddHabit: PropTypes.func,
    häufigkeit: PropTypes.arrayOf(PropTypes.object),
    habitToEdit: PropTypes.object,
  };


export default function HabitForm({
    headlineText,
    onAddHabit,
    häufigkeit,
    habitToEdit,
}) { 
const initialState = {
    ziel: '',
    häufigkeit: '',
};

const [habit, setHabit] = useState(habitToEdit ?? initialState);
const [isError, setIsError] = useState(false);

function updateHabit(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
   
    setHabit({ ...habit, [fieldName]: fieldValue });
}

function handleFormSubmit(event) {
    event.preventDefault();

    // if (validateHabit(habit)) {
    //   onAddHabit(habit);
    //   setHabit(initialState);
    //   setIsError(false);
    // } else {
    //   setIsError(true);
    //   setTimeout(() => setIsError(false), 3000);
    // }
  }
   

  //const [habit, setHabit] = useState(loadFromLocal('habit') ?? []);

  useEffect(() => {
    window.localStorage.setItem('habit', JSON.stringify(habit))
  }, [habit]);

  function addHabit(habit) {
    setHabit([...habit, habit]);
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <ErrorBox data-testid="form-error-display" isError={isError}>
        <p>You have an error in your form.</p>
      </ErrorBox>
      <label htmlFor="ZielName">Ziel</label>
      <Ziel
        type="text"
        name="ziel"
        onChange={updateHabit}
        value={habit.ziel}
      />
     
     <label htmlFor="häufigkeit">Häufigkeit</label>
      <select name="häufigkeit" id="häufigkeit" onChange={updateHabit} value={habit.häufigkeit}>
        <option value=""> wähle die Häufigkeit </option>
        <option value="täglich">täglich</option>
        <option value="wöchentlich">wöchentlich</option>
        <option value="zweiwöchentlich">zweiwöchentlich</option>
        <option value="monatlich">monatlich</option>
      </select>

      <Button isPrimary>hinzufügen</Button>
      <Button type="reset" onClick={() => setHabit(initialState)}>
        abbrechen
      </Button>
    </Form>
  );
}

const Button = styled.button`
  padding: 1.5rem;
  border-radius: 0.4rem;
  border: none;
  background: ${(props) =>
    props.isPrimary ? 'hsl(160, 60%, 50%)' : 'hsla(160, 60%, 80%, 0.3)'};
  cursor: pointer;
  font-weight: ${(props) => (props.isPrimary ? '600' : '100')};
  font-size: 1.2rem;
`;


const ErrorBox = styled.div`
  background: hsl(340, 60%, 50%);
  color: hsl(340, 95%, 95%);
  padding: ${(props) => (props.isError ? '1.2rem' : 0)};
  border-radius: 0.5rem;
  opacity: ${(props) => (props.isError ? 1 : 0)};
  max-height: ${(props) => (props.isError ? '100%' : '1px')};
  transition: all 1s ease-in-out;
  font-size: ${(props) => (props.isError ? '1rem' : '1px')};
  font-weight: bold;
`;


const Form = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: 0 auto;
  max-width: 25rem;
  label,
  legend {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
  legend {
    margin-bottom: 0.5rem;
    padding: 0;
  }
  input,
  select {
    padding: 0.5rem;
    margin-bottom: 0.3rem;
  }
  fieldset {
    border: none;
    display: flex;
    gap: 0.4rem;
    padding: 0rem;
    margin: 0;
  }
  fieldset > label {
    font-weight: normal;
  }
`;

const Ziel = styled.input`
height: 6rem;
`