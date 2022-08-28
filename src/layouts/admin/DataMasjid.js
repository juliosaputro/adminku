import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainDash from '../../components/MainDash/MainDash'
import RightSide from '../../components/RightSide/RightSide'

export default function DataMasjid() {
  return (
    <>
    <Sidebar/>
    <MainDash/>
    <RightSide title='Masjid'/>
    </>
  )
}
