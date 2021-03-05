import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';
import update from 'immutability-helper';
import { updateEmployee } from '../Api/ApiEmployee';
 
export  class EditEmployeeForm extends Component {
    
    constructor(props) {
		super(props);
		this.state = {
			editEmployee: this.props.updateEmployee,
 			errorMessage: '',
			successMessage: '',
		};
	}

	handleSubmitUpdateEmployee = (event) => {
		event.preventDefault();

		updateEmployee(this.state.editEmployee).then((data) => {
			if (data) {
				if (data.isSuccess) {
					this.setState({
						errorMessage: '',
						successMessage: data.responseMessage,
					});

					this.props.handleUpdateEmployee(data.result);
				} else {
					this.setState({ errorMessage: data.responseMessage, successMessage: '' });
				}
			}
		});
	};


	onFirstNameChange = (e) => {
		this.setState({ editEmployee: update(this.state.editEmployee, { firstName: { $set: e.target.value } }) });
	};

	onLastNameChange = (e) => {
		this.setState({ editEmployee: update(this.state.editEmployee, { lastName: { $set: e.target.value } }) });
	};
	onManagerIdChange = (e) => {
		this.setState({ editEmployee: update(this.state.editEmployee, { managerId: { $set: e.target.value } }) });
	};
	onStartDateChange = (e) => {
		this.setState({ editEmployee: update(this.state.editEmployee, { startDate: { $set: e.target.value } }) });
	};
	onEndDateChange = (e) => {
		this.setState({ editEmployee: update(this.state.editEmployee, { endDate: { $set: e.target.value } }) });
	};
	onDesignationChange = (e) => {
		this.setState({ editEmployee: update(this.state.editEmployee, { designation: { $set: e.target.value } }) });
	};
	onDateOfBirthChange = (e) => {
		this.setState({ editEmployee: update(this.state.editEmployee, { dateOfBirth: { $set: e.target.value } }) });
	};
	onDepartmentChange = (e) => {
		this.setState({ editEmployee: update(this.state.editEmployee, { department: { $set: e.target.value } }) });
	};
	onHourlyRateChange = (e) => {
		this.setState({ editEmployee: update(this.state.editEmployee, { hourlyRate: { $set: e.target.value } }) });
	};

    render() {
        return (
            <form onSubmit={this.handleSubmitUpdateEmployee}>
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
									value={this.state.editEmployee.firstName}
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
									value={this.state.editEmployee.lastName}
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
									value={this.state.editEmployee.department}
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
									value={this.state.editEmployee.managerId}
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
									value={this.state.editEmployee.startDate}
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
									value={this.state.editEmployee.endDate}
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
									value={this.state.editEmployee.dateOfBirth}
									onChange={this.onDateOfBirthChange}
								/>
							</div>
						</div>
                        <div className="form-group row">
							<label className="col-sm-4 col-form-label">Designation</label>
							<div className="col-sm-8">
								<input
									required
									type="text"
									id="txtDesignation"
									className="form-control"
									value={this.state.editEmployee.designation}
									onChange={this.onDesignationChange}
								/>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-sm-4 col-form-label">HourlyRate</label>
							<div className="col-sm-8">
								<input
									required
									type="text"
									id="txtHourlyRate"
									className="form-control"
									value={this.state.editEmployee.hourlyRate}
									onChange={this.onHourlyRateChange}
								/>
							</div>
						</div>
						
						<div className="form-group row">
							<label className="col-sm-3 col-form-label" />
							<div className="col-sm-6">
								<button name="btnAddEmployee" className="btn btn-outline-secondary">
									Save Employee
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

 