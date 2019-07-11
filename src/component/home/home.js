import React, { Component } from 'react'
import { Grid, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import axios from 'axios'

import CardTopic from '../cardTopic/cardTopic'
import AddTopic from '../addTopic/AddTopic'

import { connect } from 'react-redux'
import { getAllMain, getReply,sumitReply } from '../../redux/topic.redux'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            tidList: this.props.topic.tidList,
            ...this.props.user
        }
    }
    componentWillMount() {
        this.props.getAllMain()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.topic.tidList !== this.props.topic.tidList) {
            this.setState({ tidList: nextProps.topic.tidList });
        }
    }
    handleClickOpen(tid) {
        this.setState({
            tidList: {
                ...this.props.topic.tidList, [tid]: true
            }
        })
    }
    handleClose(tid) {
        this.setState({
            tidList: {
                ...this.props.topic.tidList, [tid]: false
            }
        })
    }
    getReply2(tid) {
        this.props.getReply(tid)
    }
    showContext(context) {
        if (context.length > 80) {
            return context.substring(0, 80)
        } else {
            return context
        }
    }
    sumitReply(tid){
        this.props.sumitReply(this.state,tid)
        this.handleClose(tid)
    }
    render() {
        const handleChange = name => event => {
            this.setState({
              [name]: event.target.value
            })
          }
        const allList = this.props.topic.allList
        const ReplyList = this.props.topic.ReplyList
        let listText 
        return (
            <React.Fragment>
                <Container style={{ marginTop: 60, paddingLeft: 177, paddingRight: '177px' }} maxWidth="xl">
                    <Grid container spacing={2}>
                        {allList && allList.map(v => {
                            return <Grid item xs={3} key={v.tid}>
                                <Card onClick={() => {
                                    this.handleClickOpen(v.tid)
                                    this.getReply2(v.tid)
                                }} key={v.tid}>
                                    {console.log(this.props)}
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="Recipe">
                                                R
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="Settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={v.title}
                                        subheader={v.createTime}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {v.context.length > 80 ? v.context.substring(0, 80) : v.context}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="Add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="Share">
                                            <ShareIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                                <Dialog
                                    open={this.state.tidList[v.tid]}
                                    onClose={() => this.handleClose(v.tid)}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    maxWidth="md"
                                    fullWidth
                                >
                                    <DialogTitle id="alert-dialog-title">{v.title}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            {/* {v.context} */}
                                            {v.context.split('\n').map(d => (
                                                <div key={d}>{d}</div>
                                            ))}
                                            <br />
                                            <br />
                                            <br />
                                            <hr />
                                            <List>
                                            {/* {
                                             this.getReply2(v.tid)&&this.getReply2(v.tid).map(v=>{
                                                console.log("asdasdasdasdasd")
                                            })} */}

                                                {ReplyList && ReplyList.map(v => {
                                                    return (
                                                        <ListItem alignItems="flex-start">
                                                            <ListItemAvatar>
                                                                <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                primary={v.sid}
                                                                secondary={
                                                                    <React.Fragment>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body2"
                                                                            color="textPrimary"
                                                                        >
                                                                            {v.context.split('\n').map(d => (
                                                                                <div key={d}>{d}</div>
                                                                            ))}
                                                                        </Typography>
                                                                        —{v.createTime}
                                                                    </React.Fragment>
                                                                }
                                                            />
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="评论"
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows="4"
                                                onChange={handleChange('replyContext')}
                                            />
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => this.sumitReply(v.tid)} color="primary">
                                            发布评论
                                        </Button>
                                        <Button onClick={() => this.handleClose(v.tid)} color="primary" autoFocus>
                                            取消
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        })}
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStatetoprops = (state) => {
    return state
}


const actionCreators = { getAllMain, getReply,sumitReply }

Home = connect(mapStatetoprops, actionCreators)(Home)


export default Home