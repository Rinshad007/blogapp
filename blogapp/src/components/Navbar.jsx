import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h6"  sx={{ flexGrow: 1 }}>
            Blog App 
        </Typography>
       <Button color="inherit" component={Link} to="/">Home</Button>
       <Button color="inherit" component={Link} to="/addblog">Add Blog</Button>
        </Toolbar>
        </AppBar>
        );
    }
    export default Navbar;