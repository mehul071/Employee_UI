import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  Badge,
  IconButton,
  createTheme,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const styles = makeStyles({
  root:{
    backgroundColor:"#fff",
    position:"relative"
  },
  SearchInput:{
    opacity:"0.6",
    padding:"0px 8px",
    fontSize:"0.8rem",
    '&:hover':{
      backgroundColor:'#f2f2f2'
    },
    '& .MuiSvgIcon-root':{
      marginRight:'8px'
    }
  }
})


function Header() {
  const classes = styles();
  return (
    <AppBar position="static" className={classes.root} elevation={5}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase placeholder="Search Topics" startAdornment={<SearchIcon fontSize="small"/>} className={classes.SearchInput}> </InputBase>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineIcon fontSize="small"/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge>
                <PowerSettingsNewIcon fontSize="small"/>
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
