import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styled from 'styled-components/macro';



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


const [habit, setHabit] = useState([]);
const [isError, setIsError] = useState(false);
const [fieldName, setFieldName] = useState('');
const [fieldValue, setFieldValue] = useState('');
const [frequency, setFrequency] = useState('');
const [frequencyName, setFrequencyName] = useState('');

const placeholderText = `neues Ziel tippen...
`

function updateField(event) {
    setFieldName(event.target.name);
    setFieldValue(event.target.value);  
}

function updateFrequency(event) {
    setFrequencyName(event.target.name);
    setFrequency(event.target.value);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const newHabit = {[fieldName]: fieldValue, [frequencyName]: frequency }
    onAddHabit(newHabit)
  }
 


  return (
    <Form onSubmit={handleFormSubmit}>
      <label htmlFor="ZielName">Ziel</label>
      <Ziel
        type="text"
        name="ziel"
        onChange={updateField}
        value={fieldValue}
        placeholder={placeholderText}
      />
     <label htmlFor="häufigkeit">Häufigkeit</label>
      <select name="häufigkeit" id="häufigkeit" onChange={updateFrequency} value={frequency}>
        <option value=""> wähle die Häufigkeit </option>
        <option value="täglich">täglich</option>
        <option value="wöchentlich">wöchentlich</option>
        <option value="zweiwöchentlich">zweiwöchentlich</option>
        <option value="monatlich">monatlich</option>
      </select>

      <Button isPrimary>hinzufügen</Button>
      <Button type="reset" onClick={() => setHabit([])}>
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
    props.isPrimary ? 'var(--primary)' : 'var(--primary-transparent)'};
  cursor: pointer;
  font-weight: ${(props) => (props.isPrimary ? '600' : '100')};
  font-size: 1.2rem;
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
  padding: 0.3rem;
`;



const Ziel = styled.input`
    height: 6rem;

    ::placeholder{
        color: var(--secondary-dark);
}
`
