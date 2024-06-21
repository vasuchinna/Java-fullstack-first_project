import axios from 'axios';
const EMPLOYEE_API_BASE_URL_delete="http://localhost:8080/api/delete"
const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/employee"
const EMPLOYEE_API_BASE_URL_Register="http://localhost:8080/api/register"
const EMPLOYEE_API_BASE_URL_getEmployId="http://localhost:8080/api/employee"
const EMPLOYEE_API_BASE_URL_updateEmployee="http://localhost:8080/api/employee"
const EMPLOYEE_API_BASE_URL_login="http://localhost:8080/api/login"
class EmployService{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployees(employee){
        return axios.post(EMPLOYEE_API_BASE_URL_Register,   employee);
    }
    getEmployeeById(employeeId)
    {
        return axios.get(EMPLOYEE_API_BASE_URL_getEmployId+'/'+employeeId);
    }
    updateEmployee(employeeId,employee)
    {
        return axios.put(EMPLOYEE_API_BASE_URL_updateEmployee+'/'+employeeId,employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL_delete+'/'+employeeId);
    }
    login(Email,Password){
        return axios.post(EMPLOYEE_API_BASE_URL_login, {email : Email, password : Password});
    }
}
export default new EmployService();