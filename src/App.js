import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';



const classes={
  app:'app',
}
const Root=styled('div')(()=>({
  [`&.${classes.app}`]:{
    backgroundColor:'#14161a',
    height:'100vh',
    color:'white',
    

  }
}))

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const router=createBrowserRouter([
  {
    path:'/',
    element:<Header/>
  }
])
function App() {


  return (
    <ThemeProvider theme={darkTheme}>
      
    <Root className={classes.app}>
      <Header/>
      <HomePage/>
    </Root>
    </ThemeProvider>
  );
}

export default App;
