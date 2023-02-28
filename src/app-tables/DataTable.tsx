import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import './table.css'

const DataTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <div>
            <table {...getTableBodyProps()}>
                {/* Header of the table  */}
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                {/* content of the table */}
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
                {/* footer of the table */}
                <tfoot>
                    {footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps()}>
                                        {
                                            column.render('Footer')
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))}
               </tfoot>
            </table>
            <img src="" alt="" />
        </div>
    );
};

export default DataTable;
