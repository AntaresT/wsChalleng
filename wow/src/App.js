import React, { useState } from 'react';
import { GlobalStyles } from './globalStyle';


import Menu from './Components/Menu';
import MainScreen from './Components/MainScreen';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <div>
        <MainScreen open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;
