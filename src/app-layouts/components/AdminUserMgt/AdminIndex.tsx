import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "../../../app-tables/columns";
import MOCK_DATA from "../../../app-tables/MOCK_DATA.json";
// import './table.css'

const AdminIndex = () => {
    const columns: any = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);



    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        },
            useSortBy
        );

    return (
        <div>
            <table className="w-full border-collapse" {...getTableBodyProps()}>
                {/* Header of the table  */}
                <thead className="bg-iBankingDarkGreen">
                    {headerGroups.map((headerGroup) => (
                        <tr  {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th className="p-3 text-white font-normal text-left" {...column.getHeaderProps(
                                    // @ts-ignore
                                    column.getSortByToggleProps()
                                )}>
                                    {column.render('Header')}
                                    <span>
                                        {
                                            // @ts-ignore
                                            column.isSorted
                                                ?
                                                (
                                                    // @ts-ignore
                                                    column.isSortedDesc ? <p className="rotate-90 inline-block mx-1">&#10151;</p> : <p className="-rotate-90 inline-block mx-1">&#10151;</p>
                                                ) :
                                                <span></span>
                                        }
                                    </span>
                                </th>
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
                                <tr className="border-y-2 border-iBankingLightGreen dark:border-gray-600 text-xs dark:text-white hover:font-semibold hover:bg-iBankingGreen hover:text-white hover:scale-105 dark:hover:text-black" {...row.getRowProps()}>
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
