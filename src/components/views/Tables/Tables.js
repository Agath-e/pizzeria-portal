import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link exact to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} activeClassName='active'>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`} activeClassName='active'>Events</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New events</Link>
  </div>
);

export default Tables;
