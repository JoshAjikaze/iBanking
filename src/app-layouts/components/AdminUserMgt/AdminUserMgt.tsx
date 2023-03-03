import React from 'react'
import { CommandBar, ComponentHeader } from '../sharedComponents/ComponentHeader'
import { Outlet} from 'react-router-dom'
import { showSearch } from '../../../app-redux/togglers/searchToggler'
import { useDispatch } from 'react-redux'
// import DataTable from '../../app-tables/DataTable'



const AdminUserMgt = () => {

  const dispatch = useDispatch()

  function handleClick() {
    alert("Hello");
  }

  return (
    <div className='relative w-full min-h-screen p-1 pt-16 md:p-3 md:pt-12 lg:p-16 bg-iBankingBgLight dark:bg-gray-800'>
      <ComponentHeader name="Admin User Management" />
      <CommandBar creationUrl={'create'} viewUrl={'view'} editUrl={'edit'} deactivateAction={undefined} activationAction={undefined} searchAction={undefined} />
      <div className="w-full min-h-[20vh] bg-white dark:bg-gray-900 mt-10">
        <Outlet />
      </div>
    </div >
  )
}

export default AdminUserMgt