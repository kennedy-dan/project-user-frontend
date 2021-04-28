import React from "react";
import { Grid, Typography } from "@material-ui/core";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import { StarsRounded, Equalizer, Security } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import bluebkg from "../assets/blue.jpg";
import Background from "./UI/background";

/**
 * @author
 * @function Home
 **/

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    // height:'20em',
    backgroundColor: theme.palette.secondary.main
  },
  media: {
    height: 140,
  },
  typo: {
    marginBottom: "0.5em",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      style={{ marginTop: "-5em", padding: "0px" }}
    >
      <Grid item>
        <Background />
      </Grid>

      <Grid item container direction="column">
        <Grid item container justify="center">
          <Typography
            variant="subtitle2"
            style={{ marginTop: "3em", fontSize: "1.6em" }}
          >
            Criminal Facts
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify="space-evenly"
          style={{ marginTop: "2em" }}
        >
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small"variant='contained'  color="primary" className={classes.btn}>
                  Share
                </Button>
                <Button size="small"  variant='contained'>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant='contained' size="small" color="primary" className={classes.btn}>
                  Share
                </Button>
                <Button size="small" variant='contained' className={classes.btn}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant='contained' color="primary"  className={classes.btn}>
                  Share
                </Button>
                <Button size="small" variant='contained' color="primary" className={classes.btn}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
