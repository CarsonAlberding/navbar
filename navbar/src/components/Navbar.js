import React from "react";
import "../App.css";
import { Paper, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FriendsIcon from "@mui/icons-material/People";
import ImagesIcon from "@mui/icons-material/Image";

const ulStyle={
    listStyleType:'none'
  }

const paperStyle={
    backgroundColor: "grey",
    padding: "20px",
    height: "70vh",
    width: 420,
    margin: "20px auto",
    borderRadius : 20
}

const navbarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        margin:"10px 0",
        link: "/home"
        
    },

    {
        title: "Mail",
        icon: <MailIcon />,
        margin:"10px 0",
        link: "/mail"
    },

    {
        title: "Analytics",
        icon: <AnalyticsIcon />,
        margin:"10px 0",
        link: "/analytics"
    },

    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        margin:"10px 0",
        link: "/dashboard"   
    },
        
    {
        title: "Friends",
        icon: <FriendsIcon />,
        margin:"10px 0",
        link: "/friends"
    },

    {
        title: "Images",
        icon: <ImagesIcon />,
        margin:"10px 0",
        link: "/images"
    }

]


    

function Navbar(){
    return(
        <Paper 
        style={paperStyle}>
            <div className="Navbar">
                <ul style={ulStyle} className="NavbarList">
                    {navbarData.map((val,key)=> {
                        return(
                            <li key ={key}
                                className="row"
                                onClick={() => {window.location.pathname = val.link}}>
                                    <p></p>
                                    {" "}
                                    <div id="icon" align= "left">{val.icon}</div>{" "}
                                    <div id="title" align = "left">
                                        {val.title}
                                    </div>
                                </li>
                        )



                    })}
                </ul>

            </div>
        </Paper>
    )
}


export default Navbar;