import styled from "styled-components";

export default function BasicTable({ habits, onEditHabit }) {
  console.log(habits, "habits");
  return (
    <Table>
      <thead>
        <tr>
          <th>Ziele</th>
          <th>Häufigkeit</th>
        </tr>
      </thead>

      <tbody>
        {habits.map((habit) => {
          return (
            <tr onClick={() => onEditHabit(habit)}>
              <td>{habit.ziel}</td>
              <td>{habit.häufigkeit}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 0 auto 6rem;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04aa6d;
    color: white;
  }
`;
