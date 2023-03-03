import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination, Row } from "react-table";
import { COLUMNS } from "../../../app-tables/columns";
import GlobalFilter from "../../../app-tables/GlobalFilter";
import MOCK_DATA from "../../../app-tables/MOCK_DATA.json";
// import './table.css'

const AdminIndex = () => {
    const columns: any = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);



    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        //@ts-ignore
        page,
        //@ts-ignore
        nextPage,
        //@ts-ignore
        previousPage,
        //@ts-ignore
        canNextPage,
        //@ts-ignore
        canPreviousPage,
        //@ts-ignore
        pageOptions,
        //@ts-ignore
        gotoPage,
        // @ts-ignore
        setPageSize,
        prepareRow,
        state,
        //@ts-ignore
        setGlobalFilter
    } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

    const { globalFilter, pageIndex, pageSize }: any = state

    // console.log(pageOptions.length);

    return (
        <div>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
                        page.map((row: Row<{ id: number; fullName: string; userName: string; role: string; email: string; status: null; }>) => {
                            prepareRow(row)
                            return (
                                <tr className="border-y-2 border-iBankingLightGreen dark:border-gray-600 text-xs dark:text-white hover:font-semibold hover:bg-iBankingGreen hover:text-white dark:hover:text-black" {...row.getRowProps()}>
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
            </table>

            <div className="flex items-center justify-between bg-[#477e5b98]">
                <div className="pl-3">
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="bg-transparent font-semibold text-xs">
                        {
                            [10, 20, 30, 50, 100].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <div className="p-1 w-full dark:text-white flex gap-x-2">
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="font-black text-iBankingDarkGreen p-2">&#10094;</button>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="font-black" >{pageIndex + 1}</button>
                        <button onClick={() => {nextPage()}} disabled={!canNextPage} className={`${pageIndex >= pageOptions.length - 1 ? "text-transparent invisible" : 'p-1 px-3 text-iBankingDarkGreen hover:border border-iBankingLightGreen'}`}>{pageIndex + 2}</button>
                        {/*  */}
                        <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage} className="font-black text-iBankingDarkGreen p-2">&#10095;</button>
                    </div>
                </div>
            </div>

            {/* <p className="px-1 hidden">
                <span className="bg-red p-1 border">{pageIndex + 1}</span>
                of
                <span className="bg-red p-1 border">{pageOptions.length}</span>
            </p> */}

        </div>
    );
};

export default AdminIndex;
