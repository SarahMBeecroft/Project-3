import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import icon1 from './img/icon1.jpg';

const useStyles = makeStyles({
  avatar: {
    margin: 7,

  },
  bigAvatar: {
    margin:2,
    width: 60,
    height: 60,
  },
});

export default function AvatarImg() {
  const classes = useStyles();

  return (
    <Grid container justify="flex-end" alignItems="flex-end">
      <Avatar alt="Hop To IT!" src={icon1} className={classes.bigAvatar} />
    </Grid>
  );
}
