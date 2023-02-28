import React from 'react'
import { CommandBar, ComponentHeader } from '../sharedComponents/ComponentHeader'
import { Activate } from '../AdminUserMgt/modal/Modal'
import { Route, Routes } from 'react-router-dom'
import AdminCreate from './AdminCreate'
// import DataTable from '../../app-tables/DataTable'

import user from '../../../app-icons/person.svg'
import create from '../../../app-icons/create.svg'
import view from '../../../app-icons/view.svg'
import edit from '../../../app-icons/edit.svg'
import activate from '../../../app-icons/activate.svg'
import deactivate from '../../../app-icons/deactivate.svg'
import search from '../../../app-icons/search.svg'
import database from '../../../app-icons/database.svg'
import ellipsis from '../../../app-icons/ellipsis.svg'

const AdminUserMgt = () => {
  return (
    <div className='w-full min-h-screen p-1 pt-16 md:p-3 md:pt-12 lg:p-16 bg-gray-100 dark:bg-gray-800'>
      <ComponentHeader name="Admin User Management" />
      <CommandBar />
      <div className="w-full min-h-[70vh] bg-white dark:bg-gray-900 mt-10">
        
      </div>
    </div>
  )
}

export default AdminUserMgt