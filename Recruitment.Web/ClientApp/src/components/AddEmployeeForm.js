import React, { Component } from 'react'
import {addEmployee} from '../Api/ApiEmployee'
import update from 'immutability-helper';
import Alert from 'react-bootstrap/Alert';


export  class AddEmployeeForm extends Component {
    constructor(props) {
		super(props);

		this.state = {
			newEmployee: this.getInitEmployee(),
			errorMessage:'',
			successMessage:''
		};
	}

	getInitEmployee = () => {
		return { firstName:'', lastName:'', department: '', managerId: ''
        , startDate:'',endDate:'', dateOfBirth:'', designation:'',hourlyRate:0 };
	};

    handleSubmitNewEmployee = (event) => {
		event.preventDefault();

		addEmployee(this.state.newEmployee ).then((data) => {
			if (data) {
				if (data.isSuccess) {
					this.props.handleNewEmployee(data.result);
					this.setState({
						newEmployee: this.getInitEmployee(),
						errorMessage: '',
						successMessage: data.responseMessage,
					});
				} else {
					this.setState({
						errorMessage: data.responseMessages,
						successMessage: '',
					});
				}
			}
		});
	};

	onFirstNameChange = (e) => {
		this.setState({ newEmployee: update(this.state.newEmployee, { firstName: { $set: e.target.value } }) });
	};

	onLastNameChange = (e) => {
		this.setState({ newEmployee: update(this.state.newEmployee, { lastName: { $set: e.target.value } }) });
	};
	onManagerIdChange = (e) => {
		this.setState({ newEmployee: update(this.state.newEmployee, { managerId: { $set: e.target.value } }) });
	};
	onStartDateChange = (e) => {
		this.setState({ newEmployee: update(this.state.newEmployee, { startDate: { $set: e.target.value } }) });
	};
	onEndDateChange = (e) => {
		this.setState({ newEmployee: update(this.state.newEmployee, { endDate: { $set: e.target.value } }) });
	};
	onDesignationChange = (e) => {
		this.setState({ newEmployee: update(this.state.newEmployee, { designation: { $set: e.target.value } }) });
	};
	onDateOfBirthChange = (e) => {
		this.setState({ newEmployee: update(this.state.newEmployee, { dateOfBirth: { $set: e.target.value } }) });
	};
	onDepartmentChange = (e) => {
		this.setState({ newEmployee: update(this.state.newEmployee, { department: { $set: e.target.value } }) });
	};
	onHourlyRateChange = (e) => {
		this.setState({ newEmployee: update(this.state.newEmployee, { hourlyRate: { $set: e.target.value } }) });
	};

    render() {
        return (
            <form onSubmit={this.handleSubmitNewEmployee}>
				<div className="card">
					<div className="card-body">
						<div className="form-group row">
							<label className="col-sm-4 col-form-label">First Name</label>
							<div className="col-sm-8">
								<input
									required
									type="text"
									id="txtFirstName"
									className="form-control"
									value={this.state.newEmployee.firstName}
									onChange={this.onFirstNameChange}
								/>
							</div>
						</div>

                        <div className="form-group row">
							<label className="col-sm-4 col-form-label">Last Name</label>
							<div className="col-sm-8">
								<input
									required
									type="text"
									id="txtLastName"
									className="form-control"
									value={this.state.newEmployee.lastName}
									onChange={this.onLastNameChange}
								/>
							</div>
						</div>


                        <div className="form-group row">
							<label className="col-sm-4 col-form-label">Department</label>
							<div className="col-sm-8">
								<input
									required
									type="text"
									id="txtDepartment"
									className="form-control"
									value={this.state.newEmployee.department}
									onChange={this.onDepartmentChange}
								/>
							</div>
						</div>
                        <div className="form-group row">
							<label className="col-sm-4 col-form-label">Manager Id</label>
							<div className="col-sm-8">
								<input
									required
									type="number"
									id="txtManagerId"
									className="form-control"
									value={this.state.newEmployee.managerId}
									onChange={this.onManagerIdChange}
								/>
							</div>
						</div>
                        <div className="form-group row">
							<label className="col-sm-4 col-form-label">Start Date</label>
							<div className="col-sm-8">
								<input
									required
									type="date"
									id="txtStartDate"
									className="form-control"
									value={this.state.newEmployee.startDate}
									onChange={this.onStartDateChange}
								/>
							</div>
						</div>

                        <div className="form-group row">
							<label className="col-sm-4 col-form-label">End Date</label>
							<div className="col-sm-8">
								<input
									required
									type="date"
									id="txtEndDate"
									className="form-control"
									value={this.state.newEmployee.endDate}
									onChange={this.onEndDateChange}
								/>
							</div>
						</div>

                        <div className="form-group row">
							<label className="col-sm-4 col-form-label">Date Of Birth</label>
							<div className="col-sm-8">
								<input
									required
									type="Date"
									id="txtDateOfBirth"
									className="form-control"
									value={this.state.newEmployee.dateOfBirth}
									onChange={this.onDateOfBirthChange}
								/>
							</div>
						</div>
                     

						<div className="form-group row">
							<label className="col-sm-4 col-form-label">Hourly Rate</label>
							<div className="col-sm-8">
								<input
									required
									type="text"
									id="txtHourlyRate"
									className="form-control"
									value={this.state.newEmployee.hourlyRate}
									onChange={this.onHourlyRateChange}
								/>
							</div>
						</div>
						
						<div className="form-group row">
							<label className="col-sm-3 col-form-label" />
							<div className="col-sm-6">
								<button name="btnAddEmployee" className="btn btn-outline-secondary">
									Add Employee
								</button>
							</div>
							<div className="col-sm-3">
								<button
									type="button"
									className="btn btn-outline-secondary"
									onClick={this.props.closeModal}
								>
									Close
								</button>
							</div>
						</div>
						<div className="form-group row">
						<div className="col-sm-12">

						<Alert show={this.state.successMessage!==''} variant="info">
							<p>
								{this.state.successMessage}
 							</p>
						</Alert>

						<Alert show={this.state.errorMessage!==''} variant="danger">
							<p>
								{this.state.errorMessage}
 							</p>
						</Alert>
						</div>

						</div>
					</div>
				</div>
			</form>
        )
    }
}

 