import './App.css';
import LoginPage from './pages/LoginPage';
import WeeklyTable from './pages/Table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Table" element={<WeeklyTable />} />
      </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
