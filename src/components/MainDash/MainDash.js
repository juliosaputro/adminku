import React from 'react'
import './MainDash.css'
import TableComponent from '../Table/TableComponent'
import FormNikah from '../Form/FormNikah'
export default function MainDash() {
  return (
    // <div>
    <div className="MainDash">
    <h1>Dashboard</h1>
    {/* <Cards /> */}
    <TableComponent />
  </div>
    // </div>
  )
}

