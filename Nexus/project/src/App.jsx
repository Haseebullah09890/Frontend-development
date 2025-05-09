import React from 'react';
import './App.css';
import Mainlayout from './layouts/Mainlayout';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ ADD THIS


const App = () => {
  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">
      {/* Adding decorative radial gradient shapes */}
      <div className="pointer-events-none absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="pointer-events-none absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      {/* Main Layout */}
      <Mainlayout />
    </div>
  );
}

export default App;
