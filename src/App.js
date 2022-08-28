import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SidebarLayout from 'react-advanced/SidebarLayout'
import Login from './layouts/admin/Login';
import Dashboard from './layouts/admin/Dashboard';
import DataNikah from './layouts/admin/DataNikah'
import DataHaji from './layouts/admin/DataHaji'
import DataMasjid from './layouts/admin/DataMasjid'
import DataMadrasah from './layouts/admin/DataMadrasah'
import DataWakaf from './layouts/admin/DataWakaf'
import DataPegawai from './layouts/admin/DataPegawai'

export default function App() {
  return (
    <div className='App'>
      <div className='AppGlass'>
    <Router>
       <Routes>
        <Route path='/' element={<DataNikah/>} />
        <Route path='/datahaji' element={<DataHaji/>}/>
        <Route path='/datamasjid' element={<DataMasjid/>}/>
        <Route path='/datamadrasah' element={<DataMadrasah/>}/>
        <Route path='/datawakaf' element={<DataWakaf/>}/>
        <Route path='/datapegawai' element={<DataPegawai/>}/>
    </Routes>
    </Router>
      </div>
    </div>
  )
}
