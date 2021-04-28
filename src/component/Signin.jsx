import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { OutlinedInput, InputBase } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import {signin} from '../actions'
import { Redirect, Link } from "react-router-dom";

/**
 * @author
 * @function Signin
 **/

const useStyles = makeStyles((theme) => ({
  txf: {
    border: " 1px solid blue",
    borderRadius: theme.shape.borderRadius,
    height: "3.5em",
  },
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover  .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    maxWidth: "14em",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "25ch",
  },

  inp: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const Signin = (props) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [values, setValues] = React.useState({
    pWord: "",
    showPassword: false,
  });
  const dispatch = useDispatch()


  const auth = useSelector(state => state.auth)

  if(auth.authenticate){
    return <Redirect to = {'/crimereport'}/>
  }else{
    // return <Redirect to = {'/signup'} />
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userSignin = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }
    dispatch(signin(user))
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ marginTop: "2em" }}
      >
        <Grid item>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ marginBottom: "1em" }}
          >
            <InputLabel htmlFor="outlined-adornment-password" color="primary">
              <EmailIcon className={classes.inp} color="secondary" />
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              labelWidth={20}
              fullWidth={true}
              style={{ color: "white" }}
              className={classes.root}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ marginBottom: "1em" }}

            // style={{backgroundColor: 'white'}}
          >
            <InputLabel htmlFor="outlined-adornment-password" color="primary">
              <LockIcon className={classes.inp} color="secondary" />
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              style={{ color: "white" }}

              value={password}
              type={values.showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              labelWidth={20}
              fullWidth={true}
              className={classes.root}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>

        <Grid item>
          <Button
            component={Link}
            to='/'
            style={{
              background: "#0B72B9",
              // color: "white",
              width: "26ch",
              marginTop: "1em",
            }}
            onClick={userSignin}
            color="secondary"
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signin;
