import React, {useState} from 'react'
import './Sidebar.css'
import Logo from '../../assets/imgs/logo.png'
import {Box, Button} from '@mui/material'
import { SidebarData } from '../../const/SidebarData'
import { motion } from "framer-motion";
import {IoMdMenu} from 'react-icons/io';
import {Link} from 'react-router-dom'
 
export default function Sidebar() {
    const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <IoMdMenu/>
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <p>
          SIMPEN<br/>DAKU  
        </p>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              // className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index) }
            >
              <Button onClick={() => setSelected(index) } style={{color:'#1b1b1b', width:'100%'}} href={item.path}>{item.tittle}</Button>
            </div>
          );
        })}
        <div>
            
        </div>
        {/* signoutIcon */}
        {/* <div className="menuItem">
          <UilSignOutAlt />
        </div> */}
      </div>
    </motion.div>
    </>
  )
}
