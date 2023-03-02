import { FunctionComponent } from "react"

interface FilterProps{
  column: any,
}

const ColumnFilter: FunctionComponent<FilterProps> = ({ column }) => {
  const {filterValue, setFilter} = column
  return (
    <div className="relative w-full bg-gray-500 text-white p-1">
      <p className="absolute right-5 top-2 cursor-pointer text-lg hover:animate-spin text-white rotate-45">&#10010;</p>
      <input value={filterValue || ''} onChange={e => setFilter(e.target.value)} placeholder="Global Search..." className="focus:outline-none p-1 w-full rounded-md bg-transparent"/>
    </div>
  )
}

export default ColumnFilter