const validateZiel = (ziel) => ziel.length >= 2;


export default function validateHabit(habit) {
  return (
    validateZiel(habit.ziel)
  );
}