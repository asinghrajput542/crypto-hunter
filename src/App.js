import './App.css';
import { styled } from '@mui/material/styles';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';



const classes={
  app:'app',
}
const Root=styled('div')(()=>({
  [`&.${classes.app}`]:{
    backgroundColor:'#14161a',
    height:'100%',
    color:'white',
    

  }
}))

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:"",
      element:<HomePage/>

    }]
  }
])
function App() {


  return (
    <ThemeProvider theme={darkTheme}>
      
    <Root className={classes.app}>
      <Header/>
      <Outlet/>
    </Root>
    </ThemeProvider>
  );
}

export default App;
