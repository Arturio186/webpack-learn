import React from 'react'

import classes from './App.module.scss';

export const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(prev => prev + 1);
  
  return (
    <React.Fragment>
      <h1 className={classes.title}>{'Hello, Webpack!'}</h1>
      <p>Count: {count}</p>
      <button className={classes.button} onClick={increment}>{'Increment'}</button>
    </React.Fragment>
  )
};