import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';



const Login = () => (
  <Paper className={styles.component}>
    <div><TextField required className={styles.textfield} id="outlined-basic" label="Login" variant="outlined">Login</TextField></div>
    <div><TextField required className={styles.textfield}
      id="outlined-basic"
      label="Password"
      variant="outlined"
      type="password"
      autoComplete="current-password"
    /></div>
    <div><Button className={styles.button} size="large" variant="outlined" color="primary" href={`${process.env.PUBLIC_URL}/`}>Sign in</Button></div>
  </Paper>
);

export default Login;
