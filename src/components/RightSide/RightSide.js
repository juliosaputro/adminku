import React from 'react'
import "./RightSide.css";
import FormNikah from '../Form/FormNikah';
import Calendar from '../Calendar/Calendar';

export default function RightSide({title='tittle'}) {
  return (
    <div className="RightSide">
    <div>
      <h3>Tambah Data {title}</h3>
      <FormNikah />
    </div>
      {/* <Calendar/> */}
  </div>
  )
}
