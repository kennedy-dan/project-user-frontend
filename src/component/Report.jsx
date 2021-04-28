import React, { useEffect, useState } from "react";
import {
  getCrimeCategories,
  getCrimeLocation,
  addcrimeReport,
  isUserLogged
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";

/**
 * @author
 * @function crimeReport
 **/

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "250px",
    // minWidth: 120,
  },
  InputLabel: {
    fontSize: "13px",
  },
  formControlText: {
    height: "2px",
  },
  btn: {
    width: "250px",
    backgroundColor: theme.palette.secondary.main,
  },
}));

const CrimeReport = (props) => {
  const classes = useStyles();

  const [reports, setReports] = useState("");
  const [locationId, setLocationId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const location = useSelector((state) => state.location);
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLogged());
    } 
  }, [auth.authenticate])
  useEffect(() => {
    dispatch(getCrimeCategories());
    dispatch(getCrimeLocation());
  }, []);

  const createCats = (categories, options = []) => {
    categories.map((cats) => {
      options.push({ value: cats._id, name: cats.name });
    });
    

    return options;
  };
  const submitReport = () => {
    const report = {
      category: categoryId,
      reportText: reports,
      location: locationId
    }
    const payload = {
      report,
    };
    dispatch(addcrimeReport(payload));
  };
  return (
    <Grid container direction="column" alignItems="center">
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.InputLabel}>
          Select Crime Category
        </InputLabel>
        <Select
          native
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          // className={classes.InputLabel}
        >
          {createCats(category.crimeCats).map((cats) => (
            <>
              <option aria-label="None" value=""></option>
              <option value={cats.value}>{cats.name} </option>
            </>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.InputLabel}>
          Select Crime Location
        </InputLabel>
        <Select
          native
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locationId}
          onChange={(e) => setLocationId(e.target.value)}
        >
          {createCats(location &&
            location.locations).map((cats) => (
              <>
                <option aria-label="None" value=""></option>
                <option value={cats.value}>{cats.name} </option>
              </>
            ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={12}
          defaultValue="Default Value"
          variant="outlined"
          value={reports}
          onChange={(e) => setReports(e.target.value)}
        />
      </FormControl>
      <Button
        variant="contained"
        className={classes.btn}
        onClick={submitReport}
      >
        Report
      </Button>
    </Grid>

  );
};

export default CrimeReport;
