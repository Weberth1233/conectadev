import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
    appBar:{
        boxShadow:'none',
    }
});

export default function Header() {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                <Button variant="contained" color="secondary">Novo Post</Button>;
                    {/*<div>
                        <a href="/">Conectar Dev - Alteração</a>
                        <input type="text"></input>
                    </div>
                    <div>
                        <Button variant="contained" color="secondary">Novo Post</Button>;
                        <span>img1</span>
                        <span>img2</span>
                    </div>*/}
                </Toolbar>
            </AppBar>
        </div>
    )
}
