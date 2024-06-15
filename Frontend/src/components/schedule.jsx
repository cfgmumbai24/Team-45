import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios'

function createData(day, time) {
  return { day, time};
}

export default function BasicTable() {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/vet/666db7b121c9e854f7a0ec2c");
        console.log(response.data.data.schedule)
        setSchedule(response.data.data.schedule);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after mount

  const rowsdata = [];

  for (let i = 0; i < schedule.length; i++) {
    rowsdata.push(createData(schedule[i].day, schedule[i].time));
  }

  console.log(rowsdata)
  
  return (
    <div style={{ width: '50vw', height: '75vh', overflow: 'auto' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsdata.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.day}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
