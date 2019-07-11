import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux'
import { changeData,getData } from '../../redux/personData.redux'

class ChangePersonData2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            ...this.props.personData,
            ...this.props.user
        };
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.changeData = this.changeData.bind(this)
    }
    componentWillMount(){
        this.props.getData(this.props.user.sid)
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
    changeData() {
        this.props.changeData(this.state)
        this.handleClose()
    }
    render() {
        const handleChange = name => event => {
            this.setState({
                [name]: event.target.value
            })
        }
        return (
            <div>
                {/* {console.log(this.props,this.state)} */}
                <Button variant="outlined" onClick={this.handleClickOpen}>
                    <Icon >create</Icon> 编辑个人资料
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth="md"
                >
                    <DialogTitle id="form-dialog-title">编辑个人资料</DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
              </DialogContentText> */}
                        <TextField
                            // className={classes.margin}
                            id="class"
                            label="班级"
                            defaultValue={this.props.personData.ClassNum}
                            // value={values.name}
                            onChange={handleChange('ClassNum')}
                            fullWidth
                            variant="outlined"
                            style={{marginBottom:16}}
                        />

                        <TextField
                            // className={classes.margin}
                            id="phone"
                            label="电话"
                            defaultValue={this.props.personData.phoneNum}
                            onChange={handleChange('phoneNum')}
                            fullWidth
                            variant="outlined"
                            style={{marginBottom:16}}
                        />
                        <TextField
                            // className={classes.margin}
                            id="QQ"
                            label="QQ"
                            defaultValue={this.props.personData.QQNum}
                            onChange={handleChange('QQNum')}
                            fullWidth
                            variant="outlined"
                            style={{marginBottom:16}}
                        />
                        <TextField
                            // className={classes.margin}
                            id="Email"
                            label="邮箱"
                            defaultValue={this.props.personData.Email}
                            onChange={handleChange('Email')}
                            fullWidth
                            variant="outlined"
                            style={{marginBottom:16}}
                        />
                        <TextField
                            // className={classes.margin}
                            id="nativePlace"
                            label="籍贯"
                            defaultValue={this.props.personData.nativePlace}
                            onChange={handleChange('nativePlace')}
                            fullWidth
                            variant="outlined"
                            style={{marginBottom:16}}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.changeData} color="primary">修改</Button>
                        <Button onClick={this.handleClose} color="primary">取消</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStatetoprops = (state) => {
    return state
}
const actionCreators = { changeData,getData }

ChangePersonData2 = connect(mapStatetoprops, actionCreators)(ChangePersonData2)

export default ChangePersonData2;