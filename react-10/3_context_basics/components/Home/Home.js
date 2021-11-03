import React from 'react';
import classes from './Home.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
// import Button from '../UI/Button/Button';

const Home = props => {
  return (
    <Card className={classes.home}>
      <h1>Welcome Back!</h1>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
