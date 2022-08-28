import React, {useState, useEffect, useMemo} from 'react'
import "./Table.css";
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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
} from '@mui/material'
import SearchBar from 'material-ui-search-bar';


export default function TableComponent() {

    const userCollectionRef = collection(db, "nikahs");
    const [nikahs, setNikahs] = useState([]);

    useEffect(() => {
        const getNikah = async () => {
          const data = await getDocs(userCollectionRef);
          console.log(data, "data");
          setNikahs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          // console.log(setNikahs, 'data')
        };
    
        getNikah();
      }, []);

  
  return (
    // <>
    <div className='Table'>
        <TableContainer 
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" , borderRadius:12}}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Desa</TableCell>
                <TableCell align="center">Nama Suami</TableCell>
                <TableCell align="center">Nama Istri</TableCell>
                <TableCell align="center">No Akta Nikah</TableCell>
                <TableCell align="center">Tanggal Nikah</TableCell>
                <TableCell align="center">No Examp</TableCell>
                <TableCell align="center">Tahun</TableCell>
                <TableCell align="center">Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nikahs.map((nikah) => {
                console.log(nikahs,'data')
                const tgl = new Date(
                  nikah.tgl_nikah.seconds * 1000 +
                    nikah.tgl_nikah.seconds / 1000000
                );
                const tanggal = tgl.toLocaleDateString();
                const tahun = tgl.getFullYear();
                return (
                <TableRow key={nikah.desa}>
                  <TableCell align="center">{nikah.desa}</TableCell>
                  <TableCell align="center">{nikah.suami}</TableCell>
                  <TableCell align="center">{nikah.istri}</TableCell>
                  <TableCell align="center">{nikah.no_akta_nikah}</TableCell>
                  <TableCell align="center">{tanggal}</TableCell>
                  <TableCell align="center">{nikah.no_examp}</TableCell>
                  <TableCell align="center">{tahun}</TableCell>
                  <TableCell align="center">aksi</TableCell>
                </TableRow>
              )})}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}
