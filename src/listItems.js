import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import AddStra from './AddStra';

// import ManageAccountsIcon from '@material-ui/icons/ManageAccounts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export const mainListItems = (
  <Router>
    <div>
    <ListItem button component={Link} to='/dashboard'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>

      <ListItemText  primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to='/addStra'>
      <ListItemIcon>
        <SettingsApplicationsIcon />
      </ListItemIcon>
      <ListItemText primary="Add Strategy" />
    </ListItem>
    
    <Switch>
      <Route path="/dashboard">
        <DashBoard />
      </Route>
      <Route path="/addStra">
        <AddStra />
      </Route>
    </Switch>
    </div>
  </Router>
);

function DashBoard() {
  return <h2>Home</h2>;
}

export const secondaryListItems = (
  <div> 
    <ListSubheader inset>Saved reports</ListSubheader> 
    <ListItem button> 
      <ListItemIcon>
        <AssignmentIcon /> 
      </ListItemIcon>
      <ListItemText primary="Current month" /> 
    </ListItem> 

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last Day" /> 
    </ListItem>
    <ListItem button>
      <ListItemIcon> 
        <AssignmentIcon />  
      </ListItemIcon> 
      <ListItemText primary="Last quarter" /> 
    </ListItem> 
  </div> 

);
