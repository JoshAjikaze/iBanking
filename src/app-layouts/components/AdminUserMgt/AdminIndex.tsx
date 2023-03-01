import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../../../app-tables/columns";
import MOCK_DATA from "../../../app-tables/MOCK_DATA.json";
// import './table.css'

const AdminIndex = () => {
    const columns:any = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <div>
            <table className="w-full" {...getTableBodyProps()}>
                {/* Header of the table  */}
                <thead className="bg-iBankingDarkGreen">
                    {headerGroups.map((headerGroup) => (
                        <tr  {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th className="p-3 text-white font-normal text-left" {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                                <tr className="border-y-2 border-iBankingLightGreen text-xs" {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td className="p-3" {...cell.getCellProps()}>
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

export default AdminIndex;
