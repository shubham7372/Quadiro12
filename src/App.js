import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ItemList from './components/Item/ItemList';
import ItemDetails from './components/Item/ItemDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
