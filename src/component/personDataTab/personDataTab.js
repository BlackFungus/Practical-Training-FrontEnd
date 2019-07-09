import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
      {console.log(props)}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  shadow:{
    boxShadow: '0 0 0 0'
  }
}));

export default function PersonDataTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.shadow}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="发帖记录" />
          <Tab label="我的评论" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>发帖记录</TabContainer>}
      {value === 1 && <TabContainer>我的评论</TabContainer>}
    </div>
  );
}