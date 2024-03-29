import React from "react";
import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { Avatar, IconButton } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import gmailIcon from '../assets/gmail_icon.png';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "./firebase";


function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut().then(() => dispatch(logout()));
  };


  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
          alt=""
        />
        <h2>Gmail</h2>
      </div>

      <div className="header_middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
       <ArrowDropDown className="header_InputCaret" />
      </div>

      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  );
}

export default Header;
