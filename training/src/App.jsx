import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { ChildrenDemo } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ChildrenDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;
