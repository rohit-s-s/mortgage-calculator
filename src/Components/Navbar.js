import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ alignItems: "start" }}>
          Mortgage Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
