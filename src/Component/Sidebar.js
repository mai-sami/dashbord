import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from 'react-router-dom';

import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
// import WindowIcon from '@material-ui/icons//Window';
  // import PieChartOutlineIcon from '@material-ui/icon/PieChartOutline';
function Sidebar() {
     const [open, setOpen] = React.useState(false);
     const [open1, setOpen1] = React.useState(false);
     const [open2, setOpen2] = React.useState(false);

       const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = () => {
    setOpen1(!open1);
  };

  const handleClickthered = () => {
    setOpen2(!open2);
  };
    return (
        <div className="sidebar">
 
           <List  
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" className="active" id="subheader">
                     

            لوحة التحكم الرئيسية  
            <SendIcon  className="actives"/>

        </ListSubheader>
      }
    >    
    
       <ListItemButton  className="a" onClick={handleClicks}  >
       {open1 ? <ExpandLess /> : <ExpandMore />}

         <ListItemText  primary="  العملاء"  
  />
         <ListItemIcon>
          <SendIcon   />
        </ListItemIcon>
      </ListItemButton>
      

      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 12 }}>
          <Link  to="/client"> 

          <ListItemText primary="قائمة العملاء  " />
          </Link>

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
         
           <ListItemButton sx={{ pl: 12}}>
           <Link  to="/teckit"> 

          <ListItemText primary="تذاكر الدعم  " />
          </Link>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
           <ListItemButton sx={{ pl: 12 }}>
           <Link  to="/poblem"> 

          <ListItemText primary="  مشاكل العملاء  " />
          </Link>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
          
        </List>
      </Collapse>
       <ListItemButton onClick={handleClickthered}  >
       {open1 ? <ExpandLess /> : <ExpandMore />}

       <ListItemText primary="المشتريات" />

        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
       </ListItemButton>
       <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:7}}>
          <Link  to="/sell"> 

          <ListItemText primary="مؤشرات المشتريات" />
          </Link>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
         
           <ListItemButton sx={{ pl:15 }}>
           <Link  to="/invoices"> 

          <ListItemText primary="الفواتير  " />
          </Link>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
           <ListItemButton sx={{ pl: 11 }}>
          <ListItemText primary="سندات الصرف  " />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
           <ListItemButton sx={{ pl: 15 }}>
          <ListItemText primary="الموردين  " />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
      {open ? <ExpandLess /> : <ExpandMore />}

      <ListItemText primary="المبيعات" />

        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
       </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 8 }}>
          <ListItemText primary="مؤشرات المشتريات" />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
         
           <ListItemButton sx={{ pl: 16 }}>
          <ListItemText primary="الفواتير  " />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
           <ListItemButton sx={{ pl: 11 }}>
          <ListItemText primary="سندات الصرف  " />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
           <ListItemButton sx={{ pl: 15 }}>
          <ListItemText primary="الموردين  " />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            
           </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
       <ListItemText primary="الكاشير" />

        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
       </ListItemButton>

       <ListItemButton>
       <ListItemText primary="الأصناف" />

        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
       </ListItemButton>
       <ListItemButton>
       <ListItemText primary="العقود" />

        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
       </ListItemButton>
        
       <ListItemButton>
       <ListItemText primary="التقارير" />

        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
       </ListItemButton>










 







    </List>  
        </div>
    )
}

export default Sidebar
