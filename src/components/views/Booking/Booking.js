import React from 'react';
import styles from './Booking.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Booking = () => (
  <Paper className={styles.component}>
    <div><TextField className={styles.textfield} id="outlined-basic" label="Table" variant="outlined" /></div>
    <div><TextField className={styles.textfield} id="outlined-basic" label="Hour" variant="outlined" /></div>
    <div><TextField className={styles.textfield} id="outlined-basic" label="How many people?" variant="outlined" /></div>
    <div><TextField className={styles.textfield} id="outlined-basic" label="Contact" variant="outlined" /></div>
    <div><Button className={styles.button} size="large" variant="outlined" color="primary" href={`${process.env.PUBLIC_URL}/booking/new`}>Send</Button></div>
  </Paper>
);

export default Booking;
