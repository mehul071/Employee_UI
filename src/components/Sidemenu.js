import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sidemenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

function Sidemenu() {
  const classes = useStyles();
  return <div className={classes.sidemenu}></div>;
}

export default Sidemenu;
