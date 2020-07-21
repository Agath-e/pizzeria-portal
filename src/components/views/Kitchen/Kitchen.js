import React from 'react';
import styles from './Kitchen.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: '1', status: 'done', order: 238},
  {id: '2', status: 'prepared', order: 678},
  {id: '3', status: 'prepared', order: 123},
  {id: '4', status: 'ordered', order: 234},
  {id: 'take-away-1', status: 'ordered', order: 345},
  {id: 'take-away-2', status: 'ordered', order: 456},
];

const renderActions = status => {
  switch (status) {
    case 'done':
      return (
        <>
          <Button>Remove</Button>
        </>
      );
    case 'prepared':
      return (
        <Button>Change to done</Button>
      );
    case 'ordered':
      return (
        <Button>Change to prepared</Button>
      );
    default:
      return null;
  }
};
const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button to={`${process.env.PUBLIC_URL}/kitchen${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
