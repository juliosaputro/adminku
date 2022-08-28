import React, {useState} from 'react'
import './Form.css'
import { db } from "../../const/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
    Button,
    TextField,
    Paper,
    Typography
} from '@mui/material'


export default function FormNikah() {

    const userCollectionRef = collection(db, "nikahs");

    const [desa, setDesa] = useState("");
    const [suami, setSuami] = useState("");
    const [istri, setIstri] = useState("");
    const [aktanikah, setAktanikah] = useState("");
    const [examp, setExamp] = useState("");
    const [tglnikah, setTglnikah] = useState([]);

    const tambahData = async () => {
        await addDoc(userCollectionRef, {
          desa: desa,
          suami: suami,
          istri: istri,
          no_akta_nikah: aktanikah,
          tgl_nikah: new Date(tglnikah),
          no_examp: examp,
        });
        // onClose();
        window.location.reload(true);
      };


  return (
    <div className='Form'>
        {/* <Paper style={{padding:10, margin:10}} className='form'> */}
            {/* <form> */}
                <div style={{padding:10}}>
            <Typography>Desa</Typography>
                <TextField
                variant='standard'
                style={{height:10}}
                onChange={(event) => {
                    setDesa(event.target.value);
                    console.log(desa, "desa");
                  }}
                />
                </div>

                <div style={{padding:10}}>
                <Typography>Nama Suami</Typography>
                <TextField
                variant='standard'
                style={{height:10}}
                onChange={(event) => {
                    setSuami(event.target.value);
                  }}
                />
                </div>

                <div style={{padding:10}}>
                <Typography>Nama Istri</Typography>
                <TextField
                variant='standard'
                style={{height:10}}
                onChange={(event) => {
                    setIstri(event.target.value);
                  }}
                />
                </div>

                <div style={{padding:10}}>
                <Typography>No Akta Nikahh</Typography>
                <TextField
                variant='standard'
                style={{height:10}}
                onChange={(event) => {
                    setAktanikah(event.target.value);
                  }}
                />
                </div>

                <div style={{padding:10}}>
                <Typography>Tanggal Nikah</Typography>
                <TextField
                variant='standard'
                style={{height:10}}
                type={'date'}
                onChange={(event) => {
                    setTglnikah(event.target.value);
                  }}
                />
                </div>

                <div style={{padding:10}} >
                <Typography>No Examp</Typography>
                <TextField
                variant='standard'
                style={{height:10}}
                onChange={(event) => {
                    setExamp(event.target.value);
                  }}
                />
                </div>
                <div   style={{
                    margin:30,
                    display: 'flex',
                    position: 'relative',
                    justifyContent:'center',
                }}>
                <Button
                type='submit'
                variant='contained'
                onClick={tambahData}
                >
                    Tamnbah Data
                </Button>
                </div>
            {/* </form> */}
        {/* </Paper> */}
    </div>
  )
}
