import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ComputerIcon from '@material-ui/icons/DesktopWindows';
import PeopleIcon from '@material-ui/icons/People'
import MedalIcon from '@material-ui/icons/EmojiEvents'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RosterModule from '../components/RosterModule';
import DeleteUser from '../components/DeleteUser';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  currentNavButton: {
    color: "#3f51b5",
  },
  modularPaper: {
    padding: theme.spacing(3, 2),
    backgroundColor: "#f5f5f5",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const RosterLink = React.forwardRef((props, ref) => <Link to="/app/roster" innerRef={ref} {...props} />);

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Architect
            </Typography>
            <DeleteUser />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
            <List>
                <ListItem button key="Competition" disabled={true}>
                  <ListItemIcon><MedalIcon /></ListItemIcon>
                  <ListItemText primary="Competition" />
                </ListItem>
                <Divider />
                <ListItem button key="Roster" className={(window.location.pathname === "/app/roster") ? classes.currentNavButton : ""} component={RosterLink}>
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Roster" />
                </ListItem>
                <Divider />
                <ListItem button key="Machines" disabled={true}>
                  <ListItemIcon><ComputerIcon /></ListItemIcon>
                  <ListItemText primary="Machines" />
                </ListItem>
                <Divider />
            </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Paper className={classes.modularPaper}>
            <Route exact={true} path="/" render={() => (
              <div>
                <Typography variant="h5" component="h3">
                  This is a sheet of paper.
                </Typography>
                <Typography component="p">
                  We should put active components here, i.e. modular components like settings pages and machine listings.
                </Typography>
              </div>
            )}/>
            <Route exact={true} path="/app/roster" render={() => (
              <div>
                <DeleteUser />
              </div>
            )}/>
          </Paper>
        </main>
      </Router>
    </div>
  );
}