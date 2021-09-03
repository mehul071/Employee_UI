import { CssBaseline, makeStyles, ThemeProvider} from "@material-ui/core";
import "./App.css";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Sidemenu from "./components/Sidemenu";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import Employee from './components/pages/employee/Employee'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const styles = makeStyles({
  appmain: {
    paddingLeft: "320px",
    width: "100%",
    // backgroundColor: "#253053",
  },
  
});

const Theme = createTheme({
  palette:{
    background:{
      default:'#f4f5fd'
    },secondary:{
      main:"#f83245",
      light:"#f8324526"
    },
    background:{
      default:"#f4f5fd"
    }
  },
  zIndex:{
    appBar:80,
  },
  shape:{
    borderRadius:"6px"
  }
})

function App() {
  const classes = styles();
  return (
    <ThemeProvider theme = {Theme}>
      <Sidemenu/>
      <div className={classes.appmain}>
        <Header />
        <Employee/>
      </div>
        <CssBaseline/>
      </ThemeProvider>
  );
}

export default App;