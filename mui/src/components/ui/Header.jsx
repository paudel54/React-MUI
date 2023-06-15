import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Typography from "@mui/material/Typography";
// configuring inline JSS
import { makeStyles } from "@mui/styles";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  // toolbar from material UI
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          {/* toolbar to pur children horizontal */}
          <Toolbar>
            <Typography variant="h3" color="white">
              Project CUBES!
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* pushing the content */}
      <div className={classes.toolbarMargin} />
    </div>
  );
};

export default Header;
