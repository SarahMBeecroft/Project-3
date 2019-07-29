import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    margin: 7,

  },
  bigAvatar: {
    margin:3,
    width: 60,
    height: 60,
  },
});

export default function AvatarImg() {
  const classes = useStyles();

  return (
    <Grid container justify="right" alignItems="right">
      <Avatar alt="Hop To IT!" src="https://ibb.co/KqLPWxQ" className={classes.bigAvatar} />
    </Grid>
  );
}
