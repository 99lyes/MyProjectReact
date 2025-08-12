import './App.css'
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignPage/>}/>
          <Route path="/login" element={<LogPage/>}/>
          <Route path="/settings" element={<SettingsPage/>}/>
          <Route path="/" element={<ProfilPage/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
