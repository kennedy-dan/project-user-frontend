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
import { signup } from "../actions";


import { Redirect, Link } from "react-router-dom";
/**
 * @author
 * @function Signup
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
    maxWidth: '14em'
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
const Signup = (props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    pWord: "",
    showPassword: false,
  });

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showP, setShowP] = useState(false);

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
  }

  if(user.authenticate){
    return <Redirect to={'/crimereport'}/>
  }
  return (
    <React.Fragment>
      <Grid container direction="column" alignItems="center"  style={{marginTop: '2em'}}>
        <Grid item>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{marginBottom: '1em'}}
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
              // style={{ color: "white" }}
              className={classes.root}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{marginBottom: '1em'}}

            // style={{backgroundColor: 'white'}}
          >
            <InputLabel htmlFor="outlined-adornment-password" color="primary">
            <LockIcon className={classes.inp} color="secondary" />

            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
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
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{marginBottom: '1em'}}
          >
            <InputLabel htmlFor="filled-adornment-password" color="primary">
              <AccountCircleIcon className={classes.inp} color="secondary" />
            </InputLabel>
            <OutlinedInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              labelWidth={20}
              fullWidth={true}
              className={classes.root}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{marginBottom: '1em'}}

            // style={{backgroundColor: 'white'}}
          >
            <InputLabel htmlFor="filled-adornment-password" color="primary">
              <AccountCircleIcon className={classes.inp} color="secondary" />
            </InputLabel>
            <OutlinedInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              labelWidth={20}
              fullWidth={true}
              className={classes.root}
            />
          </FormControl>
        </Grid>
        <Grid item>
        <Button
          component={Link}
          // to='/'
            style={{
              background: "#0B72B9",
              // color: "white",
              width: "29ch",
              marginTop: "1em",
            }}
            onClick={userSignup}
            color='secondary'
          >
            
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
