import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="Body">
    <div>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Button>
            <Link to="/login" className="link">
              Login
            </Link>
          </Button>
          <Button>
            <Link to="/register" className="link">
              Register
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <font color="black">  
      <font size="10">  
      <h1 className="title">E-Survey Application </h1> 
      </font>  
      </font>
      <div className="content">
        <div className="column">
         
        </div>

        <div className="column">
        
          
          <ul>
            
          </ul>
        </div>

        <div className="column">
         
          <ul>
           
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
