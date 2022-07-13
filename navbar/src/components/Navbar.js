import React from "react";
import "../App.css";
import { Paper, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FriendsIcon from "@mui/icons-material/People";
import ImagesIcon from "@mui/icons-material/Image";

const navbarData = [
    {
        title: "Home",
        icon: <HomeIcon />,  
        link: "/home",
        

        
    },

    {
        title: "Mail",
        icon: <MailIcon />,   
        link: "/mail"
    },

    {
        title: "Analytics",
        icon: <AnalyticsIcon />,  
        link: "/analytics"
    },

    {
        title: "Dashboard",
        icon: <DashboardIcon />,    
        link: "/dashboard"   
    },
        
    {
        title: "Friends",
        icon: <FriendsIcon />,
        link: "/friends"
    },

    {
        title: "Images",
        icon: <ImagesIcon />,
        link: "/images"
    }

]

const ulStyle={
    listStyleType: 'none'
}

const paperStyle={
    backgroundColor: "#2b9ff3",
    padding: "5px",
    height: "70vh",
    width: 170,
    margin: "20px auto",
    borderRadius : 20
}

const textstyle= {
    padding: "10px"
}

function Navbar(){
    return(
        <Paper style={paperStyle}>
            <div className="Navbar">
            <ul style={ulStyle} className="NavbarList">
            {navbarData.map((val,key)=> {
                return(
                <li key ={key}
                    className="row"
                    onClick={() => {window.location.pathname = val.link}}>
                        <p></p>
                        {" "}
                        <div id="icon" align= "center">{val.icon}</div>{" "}
                        <div id="title" align = "center" style={textstyle}>
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