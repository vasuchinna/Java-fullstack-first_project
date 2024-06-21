import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import EmployServices from '../services/EmployServices';

const LoginForm = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            EmployServices.login(email, password).then((res) => {
                navigate('/employee');
            });
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="card" style={{ width: '360px', boxShadow: '0px 0px 24px #5C5696' }}>
                <div className="card-body">
                    <form className="login" onSubmit={handleSubmit}>
                        <h2 className="text-center" style={{ color: '#000000a7', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
                            Admin Login
                        </h2>
                        <div className="form-group position-relative">
                            <i className="fas fa-user position-absolute" style={{ top: '30px', left: '10px', color: '#7875B5' }}></i>
                            <input
                                type="text"
                                className="form-control pl-5"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                                style={{ borderBottom: '2px solid #D1D1D4' }}
                            />
                        </div>
                        <div className="form-group position-relative mt-4">
                            <i className="fas fa-lock position-absolute" style={{ top: '30px', left: '10px', color: '#7875B5' }}></i>
                            <input
                                type="password"
                                className="form-control pl-5"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                                style={{ borderBottom: '2px solid #D1D1D4' }}
                            />
                        </div>
                        <button className="btn btn-primary btn-block mt-4" type="submit" style={{ backgroundColor: '#fff', color: '#4C489D', borderColor: '#D4D3E8' }}>
                            <span className="font-weight-bold">Log In Now</span>
                            <i className="fas fa-chevron-right float-right mt-1" style={{ color: '#7875B5' }}></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
