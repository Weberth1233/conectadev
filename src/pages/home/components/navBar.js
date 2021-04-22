import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

// Custom spacing material ui
/*Utilizando estilo próprio do theme para aplicar no paper
padding:theme.spacing(2) o padrão do space é 8 colocando 2 é
multiplicado o valor por 2 8*2=16*/
const useStyles = makeStyles((theme) =>({
    root:{
        padding:theme.spacing(2), //8*2
        width:275,
        marginRight:theme.spacing(2)
    },
    button:{
        width:'100%'
    }
}));
const tags=[
    { id:1, name:'react.js' },
    { id:2, name:'javascript' },
    { id:3, name:'dotnet' },
    { id:4, name:'php' },
    { id:5, name:'materialdesign' },
    { id:6, name:'webdev' }
]

export default function NavBar(){
    const classes = useStyles();

    return(
        <Paper className={ classes.root }>
            <Button className={classes.button} variant="outlined" color="secondary">Registrar Grátis</Button>
            <ListSubheader>{" Tags em alta "}</ListSubheader>
            {
                tags.map((item)=>(
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}/>
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais Tags     
            </ListItem>
        </Paper>
    )
}