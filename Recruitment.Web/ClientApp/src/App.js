import React, { Component, Fragment } from 'react';
 
import { AddEmployeeForm } from './components/AddEmployeeForm';
import { EditEmployeeForm } from './components/EditEmployeeForm';

import {EmployeeList} from './components/EmployeeList'
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Alert from 'react-bootstrap/Alert';
import {removeEmployee,getEmployees,searchEmployees} from './Api/ApiEmployee'
import update from 'immutability-helper';

import './custom.css'
 
export default class App extends Component {
  static displayName = App.name;
  constructor(props) {
		super(props);

		this.state = {
			employees: [],
 			showEditModal: false,
			showAddModal: false,
      showSearchResultAlert:false,
      errorMessage:'',
      successMessage:'',
      updateEmployee:{},
 
 		};

 	}

   componentDidMount()
   {
    this.loadEmployee();

   }

   loadEmployee =()=>{
     

     getEmployees().then((data) => {
			this.setState({ employees: data.result });
		});
   }
  
   handleNewEmployee = (employee) => {
		if (employee && employee.id > 0) {
			this.setState({ employees: [...this.state.employees, employee] });
		}
	};

  hideEditModal = () => {
		this.setState({ showEditModal: false });
	};

	hideAddModal = () => {
		this.setState({ showAddModal: false });
	};

  handleRemoveEmployee = (employeeId) => {
		removeEmployee(employeeId).then((data) => {
			if (data) {
				if (data.isSuccess) {
					this.setState({
						employees: this.state.employees.filter((el) => el.id !== employeeId),
					});
				} else {
					this.setState({ errorMessage: data.responseMessage });
				}
			}
		});
	};

	handleEditModal = (employeeId) => {
		const employee = this.state.employees.find((el) => el.id === employeeId);
		this.setState({ updateEmployee: employee });
		this.setState({ showEditModal: true });
 	};

	handleUpdateEmployee = (employee) => {
		var indexOfEmployee = this.state.employees.findIndex((i) => i.id === employee.id);
		if (indexOfEmployee >= 0) {
			this.setState(
				update(this.state, {
					employees: {
						[indexOfEmployee]: {
							$set: employee,
						},
					},
				})
			);
		}
	};
 

  onSearchBlur =(e)=>{
       searchEmployees(e.target.value).then((data) => {
     this.setState({ employees: data.result });
   });
  }

  render () {
    return (
      <Fragment> 
      
      <div className="card">
					<div className="card-header">
Employee List						<div className="float-right">
						 
						</div>
					</div>

					<div className="card-body">
						<div className="row">
							<div className="col-md-2">
 							</div>
							<div className="col-md-4">
              <input
									required
									type="text"
									id="txtSearch"
									className="form-control"
                   onBlur={this.onSearchBlur}
                   placeholder="search"
								/>
 							</div>
							<div className="col-md-6">
							 
							</div>
						</div>
						<div className="row">
							<hr />
						</div>
					 
						  
              <EmployeeList
               employees={this.state.employees}
								handleRemoveEmployee={this.handleRemoveEmployee}
								handleEditModal={this.handleEditModal}
 							/>
 
						<Alert show={this.state.showSearchResultAlert} variant="info">
							<p>
								No employee found.
							</p>
						</Alert>

						<div className="float-right">
							<button
								className="btn btn-outline-secondary"
								type="button"
								onClick={() => {
									this.setState({ showAddModal: true });
								}}
							>
								Add New Employee
							</button>
						</div>
					</div>
				</div>

      <Modal show={this.state.showAddModal} onHide={this.hideAddModal}>
					<ModalHeader>
						<ModalTitle>Add New Employee</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<AddEmployeeForm
							handleNewEmployee={this.handleNewEmployee}
 							closeModal={this.hideAddModal}
 						/>
					</ModalBody>
				</Modal>
         
        <Modal show={this.state.showEditModal} onHide={this.hideEditModal}>
					<ModalHeader>
						<ModalTitle>Edit Employee</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<EditEmployeeForm
							handleUpdateEmployee={this.handleUpdateEmployee}
              updateEmployee={this.state.updateEmployee}
							closeModal={this.hideEditModal}
 						/>
					</ModalBody>
				</Modal>
      </Fragment>
    );
  }
}
