import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Aside from './components/aside';
import Main from './components/main';
import Footer from './components/footer';
import {Stack}  from '@mui/system';
import About from './components/about';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stack direction='row' height='100vh' sx={{position:'relative',}}>
        <Aside />
        <Main />
      </Stack>
     
     <About/>
      <Footer />
   
    </div>
  );
}

export default App;
