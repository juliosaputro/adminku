import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainDash from '../../components/MainDash/MainDash'
import RightSide from '../../components/RightSide/RightSide'

export default function DataHaji() {
  return (
    <>
    <Sidebar/>
    <MainDash/>
    <RightSide title='Haji'/>
    </>
  )
}
