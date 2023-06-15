import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = (props) => {
  return (
    <div>
      <AppBar>
        {/* toolbar to pur children horizontal */}
        <Toolbar>Project CUBES!</Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
