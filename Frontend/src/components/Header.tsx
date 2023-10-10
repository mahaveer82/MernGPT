import React from 'react'
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';

const header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{position: "static", boxShadow: "none"}} >
      <ToolBar sx={{display: "flex"}}>
        <Logo/>
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink  bg="#00fffc" to="/chat" text="Go to Chat" textColor="black"/>
              <NavigationLink  bg="#51538f" to="/" text="logout" textColor="white" onClick={auth.logout}/>
            </> 
            ) : ( 
            <>
              <NavigationLink  bg="#4e019a" to="/login" text="Login" textColor="white"/>
              <NavigationLink  bg="#4e019a" to="/signup" text="Signup" textColor="white"/>
            </>
            )}
        </div>
      </ToolBar>
    </AppBar>
  )
}

export default header