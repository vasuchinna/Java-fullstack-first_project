import React from 'react'
import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import EmployServices from '../services/EmployServices';
function UpdateEmployeeComponent({}) {
    let navigate=useNavigate();
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const{id}=useParams();
    useEffect(()=>
        {
          EmployServices.getEmployeeById(id).then((res)=>
          {
              setFirstName(res.data.firstName);
              setLastName(res.data.lastName);
              setEmail(res.data.email);
      
          }).catch(error=>
              {
                  console.log(error);
              })
      
        },[])
    const cancelHandler=(e)=>
        {
            navigate('/employee');
        } 
    const updateHandler=(e)=>
        {
            e.preventDefault();
            const employee={firstName,lastName,email};
            
            if(id){
                    EmployServices.updateEmployee(id,employee).then(res=>{
                    navigate('/employee');
                    }); 
            }
            else{    
                    EmployServices.createEmployee(employee).then(res=>
                    {
                    console.log(res.data);
                    navigate('/employee');
        
                })
            }
        }    
    return (
        <div className="container mt-3">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group my-2">
                  <label>First Name:</label>
                  <input placeholder="First Name" name="firstName" className="form-control"
                         value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                </div>
                <div className="form-group my-2">
                  <label>Last Name:</label>
                  <input placeholder="Last Name" name="lastName" className="form-control"
                         value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                </div>

                <div className="form-group my-2">
                  <label>Email:</label>
                  <input placeholder="Email" name="email" className="form-control"
                         value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'onClick={updateHandler} >save</button>
                <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"} }>cancel</button>
              </form>
            </div>
          </div>
        </div>  
    </div>

  )
}

export default UpdateEmployeeComponent