import React from 'react';
import styles from './Dashboard.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const demoReservation = [
  {id: '1123', type:'booked', table:'4', duration: '16:30-18:00'},
  {id: '48', type:'event', table:'3',duration: '18:00-21:00'},
];

const demoOrders =[
  {id: '234', status:'prepared', table:'1', waiter: 'Julie'},
];

const renderActions = status => {
  switch (status) {
    case 'booked':
      return (
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/1123`}>1123</Button>
      );
    case 'event':
      return (
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/48`}>48</Button>
      );
    case 'prepared':
      return (
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/234`}>234</Button>
      );
    default:
      return null;
  }
};


const Dashboard = () => (
  <Paper className={styles.component}>
    <h2>RESERVATION</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={styles.cell}>Id order</TableCell>
          <TableCell className={styles.cell}>Table</TableCell>
          <TableCell className={styles.cell}>Duration</TableCell>
          <TableCell className={styles.cell}>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoReservation.map(row => (
          <TableRow key={row.id}>
            <TableCell className={styles.cell} component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell className={styles.cell}>
              {row.table}
            </TableCell>
            <TableCell className={styles.cell}>
              {row.duration}
            </TableCell>
            <TableCell className={styles.cell}>
              {renderActions(row.type)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <h2>ORDERS</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={styles.cell}>Id order</TableCell>
          <TableCell className={styles.cell}>Table</TableCell>
          <TableCell className={styles.cell}>Waiter</TableCell>
          <TableCell className={styles.cell}>Orders</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoOrders.map(row => (
          <TableRow key={row.id}>
            <TableCell className={styles.cell} component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell className={styles.cell}>
              {row.table}
            </TableCell>
            <TableCell className={styles.cell}>
              {row.waiter}
            </TableCell>
            <TableCell className={styles.cell}>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Dashboard;
