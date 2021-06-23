import { useMemo } from "react";
import { useTable } from "react-table";
import { columns } from "./columns";

export default function BasicTable() {
  const columns = useMemo(() => columns, []);
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
    ],
    []
  );

  const tableInstance = useTable({
    columns,
    data,
  });
 

  const {
      getTableProps, 
      getTableBodyProps, 
      headerGroups, 
      rows, 
      prepareRow 
    } = tableInstance


  return (
  <Table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
}


const Table = styled.table`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

