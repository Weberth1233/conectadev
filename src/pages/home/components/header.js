import React from 'react'
import { Button, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { Bell } from 'react-feather';

const useStyles = makeStyles({
    appBar:{
        boxShadow:'1px',
        backgroundColor:'#0D1117',
    },
    grow:{
        flexGrow:1,
    },
    userSection:{
        display:'flex',
        alignItems:'center'
    },
    button:{
        marginRight:10
    },
    bell:{
        marginRight:10
    }
});
const styleImg={
   maxHeight:55, 
}
const colorWhite={
    color:'#fff'
}

export default function Header() {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <img style={styleImg} src="/images/logo192.png" alt="logo"></img>
                    <div className={ classes.grow }></div>
                    <div className={ classes.userSection }>
                        <Button variant="contained" color="primary" className={ classes.button }>Novo Post</Button>;
                        <SvgIcon className={ classes.bell }>
                            <Bell style={ colorWhite } ></Bell>
                        </SvgIcon>
                        <Avatar alt="Weberth Erik" src="/"/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
