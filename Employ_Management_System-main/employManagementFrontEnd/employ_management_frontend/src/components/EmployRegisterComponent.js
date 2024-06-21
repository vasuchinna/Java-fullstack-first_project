import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployServices from '../services/EmployServices';
function EmployRegisterComponent() {
  const [employee,setEmployee]=useState({
    firstName:"",
    lastName:"",
    email:""
  })
  let navigate = useNavigate();
  const handleClick=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setEmployee({...employee,[name]:value});
  }    

  const saveHandler=(e)=>
  {
      e.preventDefault();
      EmployServices.createEmployees(employee).then(res=>
          {
            navigate('/employee');
          })
  }

  
  const cancelHandler=(e)=>
  {
    navigate('/employee');
  }
 
  return (
    <div className="container mt-3">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form  onSubmit={saveHandler}>
                  <div className="form-group my-2">
                    <label>First Name:</label>
                    <input placeholder="First Name" name="firstName" className="form-control"
                           value={employee.firstName} onChange={handleClick}/>
                  </div>
                  <div className="form-group my-2">
                    <label>Last Name:</label>
                    <input placeholder="Last Name" name="lastName" className="form-control"
                           value={employee.lastName} onChange={handleClick}/>
                  </div>

                  <div className="form-group my-2">
                    <label>Email:</label>
                    <input placeholder="Email" name="email" className="form-control"
                           value={employee.email} onChange={handleClick}/>
                  </div>
                  <button className='btn btn-success'   type='submit' onClick={saveHandler}>save</button>
                  <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
                </form>
              </div>
            </div>
          </div>  
      </div>
  )
}

export default EmployRegisterComponent