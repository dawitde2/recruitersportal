import React, { Component } from 'react';
import Moment from 'react-moment';


export  class EmployeeList extends Component {

  getEmployeeRows = (employees) => {
    let employeeRows = employees.map((employee) => (
      <tr key={employee.id}>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.department}</td>
        <td>
        <Moment format="YYYY/MM/DD">
        {employee.dateOfBirth}
      </Moment>
          
          </td>
        <td>
        <Moment format="YYYY/MM/DD">
        {employee.startDate}
      </Moment>
          
          </td>


        <td>
        <Moment format="YYYY/MM/DD">
        {employee.endDate}
      </Moment>
          
          </td>


        <td>
          
        {employee.managerId}
          
          </td>
          <td>
          
          {employee.hourlyRate}
            
            </td>
          <td>
          
             <button
      type="button"
      onClick={(e) => this.updateEmployee(e, employee.id)}
      className="btn btn-primary"
    >
      Edit
    </button>
            </td>

            <td>
          
            <button
      type="button"
      onClick={(e) => this.removeEmployee(e, employee.id)}
      className="btn btn-primary"
    >
      Delete
    </button>                  
            </td>
          
      </tr>
    ));

    return employeeRows;
  }

  removeEmployee = (e, courseMaterialId) => {
		this.props.handleRemoveEmployee(courseMaterialId);
	};

	updateEmployee = (e, courseMaterialId) => {
		this.props.handleEditModal(courseMaterialId);
	};


  render() {
    let contents = this.getEmployeeRows(this.props.employees);

    return this.props.employees && this.props.employees.length > 0 ?  (
      <div>
        

         
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Manager Id</th>
            <th>Hourly Rate</th>
<th>Edit</th>
<th>Delete</th>
          </tr>
        </thead>
        <tbody>
         {contents}
         </tbody>
      </table>
      </div>
    ):(<div className="alert alert-warning alert-dismissible fade show" role="alert">
    Search returned empty result.
  </div>);
  }

 
}
