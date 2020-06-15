import React from 'react'

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({summaryData}) => {

  const { confirmed, recovered, deaths } = summaryData;

  if (!confirmed) {
    return 'Loading...';
  } else {
    console.log(summaryData)
  }

  return (
    <div className={styles.gridContainer}>
      <Grid container spacing={3} sm={12} md={12} justify="center" >
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed} duration={2.1} className={styles.infected} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered} duration={2.1} className={styles.recovered} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textSecondary"  gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths} duration={2.1} className={styles.deaths} separator="," />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards