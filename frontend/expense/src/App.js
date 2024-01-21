import './App.css';
import Header from './components/header/Header';
import Dashboard from './pages/Home/Dashboard/Dashboard';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import AddExpense from './pages/addExpense/AddExpense';
import AllExpenses from './pages/allExpenses/AllExpenses';
import Login from './pages/Login/Login';
import Register from './pages/Login/Regsiter'
import Menu from './pages/menu/Menu';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/add-expense" element={<AddExpense />} />
                    <Route path="/all-expenses" element={<AllExpenses />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/menu" element={<Menu />} />
                    
                    {/* <Route path='/ipo' element={isAuthenticated(user) ? <IPO /> : <Navigate to="/login" />} />
                    <Route path='/currency' element={isAuthenticated(user) ? <Currency /> : <Navigate to="/login" />} /> */}
                    
                    {/* <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />  */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

