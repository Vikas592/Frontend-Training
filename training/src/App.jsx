import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { InputDemo } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <InputDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;
