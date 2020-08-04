import React from 'react';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import TimePicker from 'basic-react-timepicker';

const selectedDate = new Date('2014-08-18T21:11:54');

const demoContent = [
  {id: '12.00', 
    table1: ['event', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},

  {id: '12.30', 
    table1: ['event', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},

  {id: '13.00', 
    table1: ['event', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['event', 134]},

  {id: '13.30', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['event', 134]},

  {id: '14.00', 
    table1: ['free', 134], 
    table2: ['booked', 134], 
    table3: ['free', 134],
    table4: ['event', 134]},

  {id: '14.30', 
    table1: ['free', 134], 
    table2: ['booked', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},

  {id: '15.00', 
    table1: ['free', 134], 
    table2: ['booked', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},

  {id: '15.30', 
    table1: ['free', 134], 
    table2: ['booked', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},

  {id: '16.00', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},

  {id: '16.30', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['booked', 134]},

  {id: '17.00', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['booked', 134]},

  {id: '17.30', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['booked', 134]},

  {id: '18.00', 
    table1: ['booked', 134], 
    table2: ['free', 134], 
    table3: ['event', 134],
    table4: ['free', 134]},

  {id: '18.30', 
    table1: ['booked', 134], 
    table2: ['free', 134], 
    table3: ['event', 134],
    table4: ['free', 134]},

  {id: '19.00', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['event', 134],
    table4: ['free', 134]},

  {id: '19.30', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['event', 134],
    table4: ['free', 134]},

  {id: '20.00', 
    table1: ['free', 134], 
    table2: ['booked', 134], 
    table3: ['event', 134],
    table4: ['free', 134]},

  {id: '20.30', 
    table1: ['free', 134], 
    table2: ['booked', 134], 
    table3: ['event', 134],
    table4: ['free', 134]},

  {id: '21.00', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},

  {id: '21.30', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},

  {id: '22.00', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},

  {id: '22.30', 
    table1: ['free', 134], 
    table2: ['free', 134], 
    table3: ['free', 134],
    table4: ['free', 134]},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <div><Button className={styles.green} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Button></div>
          <div><Button className={styles.green} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/event/new`}>New Event</Button></div>
        </>
      );
    case 'booked':
      return (
        <Button className={styles.red}>booked</Button>
      );
    case 'event':
      return (
        <Button className={styles.red}>event</Button>
      );
    default:
      return null;
  }
};


const Tables = () => (

  
  

  <Paper className={styles.component}> 
    <div>
      <form className={styles.calendar} noValidate >
        <TextField
          id="date"
          label="Choose day"
          type="date"
          defaultValue={selectedDate}
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TimePicker 
          name="default"
          defaultValue="11:30AM"
        />
      </form>
    </div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Hour</TableCell>
          <TableCell>1</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
          <TableCell>4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {renderActions(row.table1[0])}
            </TableCell>
            <TableCell>
              {renderActions(row.table2[0])}
            </TableCell>
            <TableCell>
              {renderActions(row.table3[0])}
            </TableCell>
            <TableCell>
              {renderActions(row.table4[0])}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
