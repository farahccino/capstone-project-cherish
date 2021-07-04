import styled from 'styled-components/macro';

export default function BasicTable({ habits, onEditHabit }) {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <th>Ziele</th>
          <th>Häufigkeit</th>
        </thead>

        <tbody>
          {habits.map((habit) => {
            return (
              <tr onClick={() => onEditHabit(habit)}>
                <td>{habit.goal}</td>
                <td>{habit.frequency}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

const Table = styled.table`
  color: white;
  margin: 0 auto 6rem;
  text-align: center;
  width: 90%;

  td,
  th {
    border: none;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    font-weight: 400;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: var(--primary-transparent);
    backdrop-filter: blur(15px);
  }

  tr:nth-child(odd) {
    background-color: var(--secondary-transparent);
    backdrop-filter: blur(15px);
  }

  th {
    background-color: hsla(170, 80%, 30%, 0.85);
    color: ivory;
    font-weight: 600;
    padding-bottom: 12px;
    padding-top: 12px;
    text-align: center;
  }
`;

const TableWrapper = styled.div`
  background: none;
  height: 3rem;
  padding: 0.5rem;
`;
