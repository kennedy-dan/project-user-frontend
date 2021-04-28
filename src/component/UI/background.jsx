import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import bluebkg from "../../assets/blck.jpg";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import { StarsRounded, Equalizer, Security } from "@material-ui/icons";

/**
 * @author
 * @function Background
 **/

const useStyles = makeStyles((theme) => ({
  bcgpix: {
    backgroundImage: `url(${bluebkg})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
  header: {
    marginBottom: "1em",
    fontSize: "1.6em",
    marginTop: "2em",
    color: "white",
    [theme.breakpoints.down("sm")]: {
    fontSize: "1.2em",

      },
  },
  introCont: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
    marginTop: "3em",
  },
  icon: {
    // width:'7em'
    fontSize: "4em",
    color: theme.palette.secondary.main,
  },
  typo: {
    color: "white",
    marginTop: "0.5em",
  },
  cont: {
    [theme.breakpoints.down("sm")]: {
      height: "45em",
    },
    height: "30em",
    maxWidth: "100%",
  },
  data: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
}));

const Background = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid container className={classes.cont}>
      <Grid item container style={{ position: "absolute", marginTop: "4em" }}>
        <Grid container justify="center">
          <Typography style={{}} className={classes.header}>
            Preserving The Peace of The Citizen
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          justify="space-between"
          className={classes.introCont}
        >
          <Grid
            item
            container
            direction="column"
            xs
            alignItems="center"
            className={classes.data}
          >
            <StarsRounded className={classes.icon} />
            <Typography variant="body1" className={classes.typo}>
              SAFETY & SECURITY
            </Typography>
            <Typography variant="subtitle2" className={classes.typo}>
              Your safety and security is of our paramiunt interest
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs
            alignItems="center"
            className={classes.data}
          >
            <Equalizer className={classes.icon} />
            <Typography variant="body1" className={classes.typo}>
              SAFETY & SECURITY
            </Typography>
            <Typography variant="subtitle2" className={classes.typo}>
              Your safety and security is of our paramiunt interest
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs
            alignItems="center"
            className={classes.data}
          >
            <Security className={classes.icon} />
            <Typography variant="body1" className={classes.typo}>
              SAFETY & SECURITY
            </Typography>
            <Typography variant="subtitle2" className={classes.typo}>
              Your safety and security is of our paramiunt interest
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.bcgpix} />
    </Grid>
  );
};

export default Background;
