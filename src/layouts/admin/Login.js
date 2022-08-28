import React from 'react'
import {useNavigate} from 'react-router-dom'
import {
    Container,
    Button
} from '@mui/material'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Login() {
    const navigate = useNavigate()
  return (
    <Container maxWidth={'xl'} style={{background:'red'}}>
        {/* <Button onClick={()=>navigate('/datanikah')}>Login</Button> */}
        <Sidebar/>
    </Container>
  )
}
