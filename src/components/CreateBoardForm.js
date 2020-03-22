import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '300px'
    },
  }
});

class CreateBoardForm extends React.Component {

  state = {
    title: '',
    background: '#99b3ff',
    color: ''
  }

  setColor = color => {
    this.setState({ color: color })
  }

  handleChange = event => {
    this.setColor(event.target.value);
    this.setState({ background: event.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const board = {
      title: this.state.title,
      background: this.state.background,
      createdAt: new Date(),
      user: 'anika'
    }
    if (board.title && board.background) {
      this.props.createNewBoard(board)
    }
  }

  render() {
    return (
      <form id="create-board-form"
        className={this.props.classes.root}
        noValidate autoComplete="off"
        onSubmit={this.handleSubmit}>
        <TextField type="input" id="outlined-basic" form="create-board-form" label="Board Name" variant="outlined"
          onChange={(e) => this.setState({ title: e.target.value })} />
        <FormControl id="color-form-control"
        >
          <InputLabel id="customized-select-label" value=''>Color</InputLabel>
          <Select
            labelId="customized-select-label"
            id="customized-select"
            value={this.state.color}
            onChange={this.handleChange}
          >
            <MenuItem value={"none"}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"#99b3ff"}>Blue</MenuItem>
            <MenuItem value={"#ffffb3"}>Yellow</MenuItem>
            <MenuItem value={"#bfff80"}>Green</MenuItem>
            <MenuItem value={"#d580ff"}>Purple</MenuItem>
            <MenuItem value={"#ffb3ff"}>Pink</MenuItem>
          </Select>
        </FormControl>
        <Button id="button-submit" type="submit" form="create-board-form" variant="contained" color="secondary">
          Create New Board
        </Button>
      </form>
    )
  }
}

export default withStyles(useStyles)(CreateBoardForm)

CreateBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired
}
