import './App.css';
import Header from './pages/home/components/header'
import NavBar from './pages/home/components/navBar'
import Fedd from './pages/home/components/feed'
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
function App() {
  const classes = useStyles();

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
