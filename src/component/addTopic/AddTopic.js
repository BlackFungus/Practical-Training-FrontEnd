import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';


import { connect } from 'react-redux'
import { sumit } from '../../redux/topic.redux'

class AddTopic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      // ...this.props.personData,
      ...this.props.user
    };
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.sumit = this.sumit.bind(this)
  }
  handleClickOpen() {
    this.setState({
      open: true
    })
  }
  handleClose() {
    this.setState({
      open: false
    })
  }
  sumit() {
    this.props.sumit(this.state)
    this.handleClose()
  }
  render() {
    const handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      })
    }

    return (
      <React.Fragment>
          <IconButton edge="start"  color="inherit" aria-label="Menu" onClick={this.handleClickOpen} style={{marginRight:16}}>
                <Icon >note_add</Icon>
        </IconButton>
        <Dialog open={this.state.open}
          maxWidth="md"
          fullWidth
          onClose={this.handleClose} 
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">编辑</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
            <TextField
              // autoFocus
              margin="dense"
              id="name"
              label="标题"
              // type="email"
              onChange={handleChange('title')}
              fullWidth
            />
            <TextField
              id="outlined-multiline-static"
              label="内容"
              multiline
              rows="7"
              // defaultValue="Default Value"
              // className={classes.textField}
              onChange={handleChange('context')}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.sumit} color="primary">
              发布
          </Button>
            <Button onClick={this.handleClose} color="primary">
              撤销
          </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

const mapStatetoprops = (state) => {
  return state
}

const actionCreators = { sumit }

AddTopic = connect(mapStatetoprops, actionCreators)(AddTopic)

export default AddTopic;