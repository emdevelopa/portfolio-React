import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Aside from './components/aside';
import Main from './components/main';
import Footer from './components/footer';
import { Stack } from '@mui/system';
import About from './components/about';
import { Box, ThemeProvider, createTheme, CssBaseline} from '@mui/material';
import Projects from './components/projects';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Navbar />
        <Stack direction='row' height='100vh' sx={{ position: 'relative', }}>
          <Aside />
          <Main />
        </Stack>

        <About />
        <Projects/>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
