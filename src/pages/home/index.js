import Header from './components/header';
import NavBar from './components/navBar';
import Fedd from './components/feed';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root:{
      display:'flex',
      flexDirection:'column'
    },
    main:{
      height:'100vh',
      padding:24
    }, 
    toolbar:{
      minHeight:'64px'
    }
})

export default function Home(){
    const classes = useStyles();
    return(
        <div className={ classes.root }>
            <Header></Header>
            <div className={ classes.toolbar }></div>
            <main className={ classes.main }>
            <Container maxWidth="lg">
                <Box display="flex">
                    <NavBar/>
                    <Fedd/>
                </Box>
            </Container>
            </main>
      </div>
    )
}
