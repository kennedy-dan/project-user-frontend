import react, {useEffect} from  'react'
import theme from'./component/UI/Theme'
import { ThemeProvider } from "@material-ui/styles";
import Header from './component/UI/Header'
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Signin from '../src/component/Signin'
import Signup from '../src/component/Signup'
import Home from './component/Home';
import crimeReport from './component/Report';
import { useDispatch, useSelector } from "react-redux";
import {isUserLogged} from "./actions"
import Private from './component/HOC/Private'



function App() {
  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLogged());
    } 
  }, [auth.authenticate])

  return (
    <ThemeProvider theme={theme}>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/signin' component={Signin}/>
          <Private exact path='/crimereport' component={crimeReport}/>
          <Home />
        </Switch>
    </ThemeProvider>
  );
}

export default App;
