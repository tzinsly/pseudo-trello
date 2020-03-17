import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button'

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(0)
    },
    'button': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = theme =>({
  margin: {
    margin: theme.spacing(1),
  },
});

class CreateBoardForm extends React.Component {

  state = {
    color: null
  }

  setColor = color => {
    this.setState({ color: '' })
  }

  handleChange = event => {
    this.setColor(event.target.value);
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <FormControl className={this.props.classes.margin}>
          <InputLabel className="create-board-input" htmlFor="customized-textbox">Board Name</InputLabel>
          <BootstrapInput className="create-board-input" id="customized-textbox" />
        </FormControl>
        <FormControl className={this.props.classes.margin}>
          <InputLabel className="create-board-select" id="customized-select-label">Color</InputLabel>
          <Select className="create-board-select"
            labelId="customized-select-label"
            id="customized-select"
            value={this.state.color}
            onChange={this.handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"#99b3ff"}>Blue</MenuItem>
            <MenuItem value={"#ffffb3"}>Yello</MenuItem>
            <MenuItem value={"#bfff80"}>Green</MenuItem>
            <MenuItem value={"#d580ff"}>Purple</MenuItem>
          </Select>
        </FormControl>
        <Button className={this.props.classes.margin} variant="contained" color="secondary">
          Secondary
        </Button>
      </div>
    )
  }
}

export default withStyles(useStyles)(CreateBoardForm)


