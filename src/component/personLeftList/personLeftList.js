import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
    myIcon: {
        fontSize: '16px',

    },
    button: {
        margin:'0 auto'
    }
}));

export default function ListDividers() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper>
                <List component="nav" className={classes.root} aria-label="Mailbox folders">
                    <ListItem>
                        <Button variant="outlined" className={classes.button} >
                            <Icon className={classes.myIcon} >create</Icon> 编辑个人资料
                    </Button>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary={<React.Fragment>
                            <Typography variant="h6" gutterBottom>
                                班级
                      </Typography></React.Fragment>
                        } secondary={<React.Fragment>
                            <Typography variant="body1">
                                软件1703
                      </Typography></React.Fragment>
                        } />
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemText primary={<React.Fragment>
                            <Typography variant="h6" gutterBottom>
                                电话
                      </Typography></React.Fragment>
                        } secondary={<React.Fragment>
                            <Typography variant="body1">
                                18722055789
                      </Typography></React.Fragment>
                        } />
                    </ListItem>
                    <Divider light />
                    <ListItem >
                        <ListItemText primary={<React.Fragment>
                            <Typography variant="h6" gutterBottom>
                                QQ
                      </Typography></React.Fragment>
                        } secondary={<React.Fragment>
                            <Typography variant="body1">
                                1137118230
                      </Typography></React.Fragment>
                        } />
                    </ListItem>
                    <Divider light />
                    <ListItem >
                        <ListItemText primary={<React.Fragment>
                            <Typography variant="h6" gutterBottom>
                                邮箱
                      </Typography></React.Fragment>
                        } secondary={<React.Fragment>
                            <Typography variant="body1">
                                xuhuihongxxx@163.com
                      </Typography></React.Fragment>
                        } />
                    </ListItem>
                    <Divider light />
                    <ListItem >
                        <ListItemText primary={<React.Fragment>
                            <Typography variant="h6" gutterBottom>
                                籍贯
                      </Typography></React.Fragment>
                        } secondary={<React.Fragment>
                            <Typography variant="body1">
                                福建省漳州市
                      </Typography></React.Fragment>
                        } />
                    </ListItem>

                </List>
            </Paper>
        </React.Fragment>
    );
}