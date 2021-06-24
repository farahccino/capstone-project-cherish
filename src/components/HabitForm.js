import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components/macro';

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

  const placeholderText = `neues Ziel tippen...
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
      <Ziel
        type="text"
        name="goal"
        onChange={handleUpdateHabit}
        value={habit.goal}
        placeholder={placeholderText}
      />
      <label htmlFor="frequency">Häufigkeit</label>
      <select
        name="frequency"
        id="frequency"
        onChange={handleUpdateHabit}
        value={habit.frequency}
      >
        <option value=""> wähle die Häufigkeit </option>
        <option value="täglich">täglich</option>
        <option value="wöchentlich">wöchentlich</option>
        <option value="zweiwöchentlich">zweiwöchentlich</option>
        <option value="monatlich">monatlich</option>
      </select>
      <Button isPrimary>{habitToEdit ? 'speichern' : 'hinzufügen'}</Button>
      <Button type="button" onClick={goToPreviousPath}>
        zurück
      </Button>
      {habitToEdit && (
        <Button type="button" onClick={() => onDeleteHabit(habit.id)}>
          löschen
        </Button>
      )}
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

  ::placeholder {
    color: var(--secondary-dark);
  }
`;
