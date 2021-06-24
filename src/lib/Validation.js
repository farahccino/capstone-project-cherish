const validateGoal = (goal) => goal.length >= 2;

export default function validateHabit(habit) {
  return validateGoal(habit.goal);
}
