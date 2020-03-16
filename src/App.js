import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import data from './sampleData'
import Home from './components/pages/Home'
import Board from './components/Board'
import styles from './'

const useStyles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  }
};

export default withStyles(useStyles)(
  class App extends React.Component {

    state = {
      boards: [],
      lists: [],
      auth: false,
      anchorE1: null
    }

    //const [auth, setAuth] = React.useState(true);
    setAuth(isChecked) {
      this.setState({ auth: isChecked });
    }

    //const [anchorEl, setAnchorEl] = React.useState(null);
    setAnchorE1() {
      this.setState({ anchorEl: null });
    }

    handleChange = event => {
      this.setAuth(event.target.checked);
    };

    handleMenu = event => {
      this.setAnchorEl(event.currentTarget);
    };

    handleClose = () => {
      this.setAnchorEl(null);
    };

    componentDidMount() {
      this.setState({ boards: data.boards })
    }

    createNewBoard = board => {
      this.setState({ boards: [...this.state.boards, board] })
    }

    render() {
      const open = Boolean(this.state.anchorEl);

      return (
        <div className={this.props.classes.root}>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={this.state.auth} onChange={this.handleChange} aria-label="login switch" />}
              label={this.state.auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={this.props.classes.title}>
                Pseud Trello
          </Typography>
              {this.state.auth && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Home boards={this.state.boards}
                    createNewBoard={this.createNewBoard} />
          <Board />
        </div>
      );
    }
  }
)
