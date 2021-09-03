import React from 'react';
import { Media, MediaContextProvider } from "../media"
import Main from './Desktop/main/main.js';
import MobileMain from './Mobile/main/main.js';

function App () {
  return (
      <div>
         <MediaContextProvider>
      <Media at="sm"><MobileMain /></Media>
      <Media greaterThanOrEqual="md"><Main /></Media>
      </MediaContextProvider>  
      </div>
  )
}
export default App;