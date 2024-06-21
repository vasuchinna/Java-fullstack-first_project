import React from 'react'
import ListEmployComponent from './components/ListEmployComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EmployRegisterComponent from './components/EmployRegisterComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import DeleteComponent from './components/DeleteComponent';
import LoginForm from './components/Login'


function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/" element={<LoginForm/>} />
            <Route path="/employee" element={<ListEmployComponent/>} />
            <Route path="/register" element={<EmployRegisterComponent/>} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
            <Route path="/delete" element={<DeleteComponent/>} />
          </Routes>
        </div>
      </Router>
      
      
      
      <FooterComponent />
    </div>
  )
}

export default App