import React from 'react'; // Import React
import './App.css';  // Import Stylesheet
import Sidebar from './components/Sidebar';  // Import Sidebar Comp
import Main from './components/Main'; // Import Main Comp


function App() {
  return (
    <div className="App">
      {/* Sidebar Component */}
      <Sidebar />
      {/* Main Component */}
      <Main />
    </div>
  );
}

export default App;
