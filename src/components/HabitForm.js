import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import checkIcon from '../images/check.svg';
import deleteIcon from '../images/delete.svg';
import returnIcon from '../images/return.svg';

HabitForm.propTypes = {
  headlineText: PropTypes.string,
  onAddHabit: PropTypes.func,
  häufigkeit: PropTypes.arrayOf(PropTypes.object),
  setHabitToEdit: PropTypes.func,
};

export default function HabitForm({
  onAddHabit,
  onEditHabit,
  habitToEdit,
  setShowsEditModal,
  onDeleteHabit,
}) {
  const initialHabit = {
    goal: '',
    frequency: '',
  };

  const [habit, setHabit] = useState(habitToEdit ?? initialHabit);

  const placeholderText = `neues Ziel...
`;

  function handleUpdateHabit(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    setHabit({ ...habit, [fieldName]: fieldValue });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    if (habitToEdit) {
      onEditHabit(habit);
      setShowsEditModal(false);
    } else {
      onAddHabit({ ...habit, id: uuidv4() });
    }
  }

  let history = useHistory();
  const goToPreviousPath = () => {
    habitToEdit ? setShowsEditModal(false) : history.push('/today');
  };

  return (
    <Form onSubmit={handleFormSubmission}>
      <label htmlFor="goal">Ziel</label>
      <Input
        type="text"
        name="goal"
        onChange={handleUpdateHabit}
        value={habit.goal}
        placeholder={placeholderText}
      />
      <label htmlFor="frequency">Häufigkeit</label>
      <Dropdown
        name="frequency"
        id="frequency"
        onChange={handleUpdateHabit}
        value={habit.frequency}
      >
        <option value=""> wähle die Häufigkeit </option>
        <option value="täglich">täglich</option>
        <option value="wöchentlich">wöchentlich</option>
        <option value="monatlich">monatlich</option>
        <option value="vierteljährlich">vierteljährlich</option>
        <option value="jährlich">jährlich</option>
      </Dropdown>
      <Button isPrimary>
        {habitToEdit ? 'speichern' : 'hinzufügen'}{' '}
        <img src={checkIcon} alt="check icon" height="16" />
      </Button>
      {habitToEdit && (
        <Button type="button" onClick={() => onDeleteHabit(habit.id)}>
          löschen <img src={deleteIcon} alt="delete icon" height="16" />
        </Button>
      )}
      <Button type="button" onClick={goToPreviousPath}>
        zurück <img src={returnIcon} alt="return icon" height="16" />
      </Button>
    </Form>
  );
}

const Button = styled.button`
  background: ${(props) =>
    props.isPrimary
      ? 'var(--secondary-dark)'
      : 'var(--secondary-dark-transparent);'};
  border: none;
  border-radius: 0.4rem;
  color: var(--font);
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: ${(props) => (props.isPrimary ? '600' : '100')};
  padding: 1.5rem;
`;

const Dropdown = styled.select`
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  backdrop-filter: blur(2px);
  background: var(--font);
  color: var(--secondary-dark);
  outline: none;
`;

const Form = styled.form`
  color: white;
  display: grid;
  gap: 0.5rem;
  margin: 0.75rem 0.75rem;
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

  input,
  textarea {
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.6rem;
    backdrop-filter: blur(2px);
    background: var(--font);
    outline: none;
  }
`;

const Input = styled.input`
  height: 6rem;

  ::placeholder {
    color: var(--secondary-dark);
  }
`;
