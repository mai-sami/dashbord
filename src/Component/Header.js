import React from 'react'
import '../Css/Home.css'
import Badge from '@mui/material/Badge';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import avatar from "../images/avatar.png"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
  function Header() {
    var loadFile = function (event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    return (
        <div className="header">
              <div className="header__left">
                    
            <div class="profile-pic">
                <label class="-label" for="file">
                    <span class="glyphicon glyphicon-camera"></span>
                    <span>Change Image</span>
                </label>
                <input id="file" type="file"  onchange="loadFile(event)" />
                <img src={avatar}  id="output" width="45" />
            </div>
 
<div className="Notifcation">
 


<Badge color="success" badgeContent={1000} variant="dot" anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}  >
        <NotificationsNoneIcon  className="notif"  style={{ fontSize:33 }}/>
      </Badge>
</div>

<div className="header__search">
<input  placeholder="ابحث هناا" className="header__searchInput" />
<SearchIcon className="header__searchIcon"/>
</div>
          </div>
            <p className="p__P">لوحة التحكم</p>
                 </div>
    )
}
export default Header
