import React from 'react';
import {Homepage} from '../../components/Homepage';
import { makeStyles } from '@mui/styles';

export const Home = () => {
    const useStyles = makeStyles(() => ({
      container: {
        position: "fixed",
        top: "20%",
        left: "13%",
        width: "84%",
        height: "75%",
        maxWidth: "1300px",
      },
      components: {
          position: "relative",
          marginTop: "20px",
          height: "600px",
          borderRadius: "25px",
          boxShadow: "5px 5px 25px 10px rgba(0, 0, 0, 0.1)",
      }
  }))
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Homepage></Homepage>
    </div>
  )
}