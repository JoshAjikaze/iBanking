import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../app-redux/store'
import { hideSearch, showSearch } from '../../../app-redux/togglers/searchToggler'

const RoleManagement = () => {
  const dispatch = useDispatch()
  
  return (
    <div>
      <button onClick={() => { dispatch(showSearch()) }}>Click Me</button>
      <button onClick={() => { dispatch(hideSearch()) }}>Click Me2</button>
    </div>
  )
}

export default RoleManagement