import React from 'react'
import {Link, Outlet} from 'react-router-dom';

import classes from './App.module.scss';

export const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(prev => prev + 1);
  
  return (
    <React.Fragment>
      <Link to={'/about'}>{'About'}</Link>
      <br />
      <Link to={'/shop'}>{'Shop'}</Link>

      <h1 className={classes.title}>{'Hello, Webpack!'}</h1>
      <p>Count: {count}</p>
      <button className={classes.button} onClick={increment}>{'Increment'}</button>

      <Outlet />
    </React.Fragment>
  )
};