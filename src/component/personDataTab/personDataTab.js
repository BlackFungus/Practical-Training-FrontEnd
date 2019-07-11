import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import withStyles from 'react-jss'

import { connect } from 'react-redux'
import { getMain,getUserReply } from '../../redux/topic.redux'

const styles = {
  root: {
      boxShadow: "0 0 0 0!important"
  },
  font: {
      color: "yellow!important"
  },
  button: {
      // margin: theme.spacing(1),
  }
}



class personDataTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount() {
    this.props.getMain(this.props.user.sid)
    this.props.getUserReply(this.props.user.sid)
  }
  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }
  render() {
    const list = this.props.topic.list
    const userReplyList = this.props.topic.userReplyList
    return (
      <div>

        {/* {console.log(this.state, this.props)} */}
        <AppBar position="static" color="default" style={{ color: 'rgba(0,0,0,0.54)' }} className={this.props.classes.root}>
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="发帖记录" />
            <Tab label="我的评论" />
          </Tabs>
        </AppBar>
        {this.state.value === 0 &&
          <Typography component="div" style={{ padding: 8 * 3 }}>
            {list && list.map(v => {
              return <Paper style={{ padding: 8 * 1, marginBottom: 8 }}>
                <Typography variant="h6" component="h3">
                  {v.title}
                </Typography>
                <Typography component="p" style={{ color: 'rgba(0,0,0,0.54)' }}>
                  {v.createTime}
                </Typography>
              </Paper>
            })}
          </Typography>
        }
        {this.state.value === 1 &&
          <Typography component="div" style={{ padding: 8 * 3 }}>
             {userReplyList && userReplyList.map(v => {
              return <Paper style={{ padding: 8 * 1, marginBottom: 8 }}>
                <Typography variant="h6" component="h3">
                  {v.title}
                </Typography>
                <Typography component="p" style={{ color: 'rgba(0,0,0,0.78)' }}>
                  {v.context}
                </Typography>
                <Typography component="p" style={{ color: 'rgba(0,0,0,0.54)' }}>
                  {v.createTime}
                </Typography>
              </Paper>
            })}
          </Typography>
        }
      </div>
    );
  }
}

const mapStatetoprops = (state) => {
  return state
}

const actionCreators = { getMain,getUserReply }

personDataTab = withStyles(styles)(personDataTab);

personDataTab = connect(mapStatetoprops, actionCreators)(personDataTab)

export default personDataTab;
