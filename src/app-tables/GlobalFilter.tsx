import { FunctionComponent } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app-redux/store"

interface FilterProps{
  filter: any,
  setFilter: any
}

const GlobalFilter: FunctionComponent<FilterProps> = ({ filter, setFilter }) => {

  const toggle = useSelector((state: RootState) => state.searchBar.value)
  console.log(toggle)
  return (
    <div className={` ${ !toggle ? 'hidden': `relative w-full bg-gray-500 text-white p-1`}`}>
      <p className="absolute right-5 top-2 cursor-pointer text-lg hover:animate-spin text-white rotate-45">&#10010;</p>
      <input value={filter || ''} onChange={e => setFilter(e.target.value)} placeholder="Global Search..." className="focus:outline-none p-1 w-full rounded-md bg-transparent"/>
    </div>
  )
}

export default GlobalFilter