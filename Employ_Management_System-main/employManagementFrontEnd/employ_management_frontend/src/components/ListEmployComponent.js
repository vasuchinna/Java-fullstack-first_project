import React, { Component } from 'react';
import EmployServices from '../services/EmployServices';
import { Link } from 'react-router-dom';

export default class ListEmployComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { employee: [] };
    }

    componentDidMount() {
        EmployServices.getEmployees().then((res) => {
            this.setState({ employee: res.data });
        }).catch(error => {
            console.error('There was an error fetching the employees!', error);
        });
    }

    deleteEmployee = (employeeId) => {
        EmployServices.deleteEmployee(employeeId).then((res) => {
            EmployServices.getEmployees().then((res) => {
                this.setState({ employee: res.data });
            }).catch(error => {
                console.log(error);
            });
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <h2 className="text-center mb-4" style={{ color: '#343a40' }}>Employee List</h2>
                <div className="d-flex justify-content-end mb-4">
                    <Link to="/register" className="btn btn-primary">Register</Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(employee => {
                                    return (
                                        <tr key={employee.id} className="table-light">
                                            <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <Link to={`/update-employee/${employee.id}`} className="btn btn-info">Update</Link>
                                                <button className="btn btn-danger ml-2" style={{ marginLeft: "5px" }} onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
