import Header from "./ui/Header";
import { ThemeProvider } from '@mui/styles';
import theme from "./ui/Theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        Hello iniital Setup.
      </ThemeProvider>
    </div>
  );
}

export default App;
