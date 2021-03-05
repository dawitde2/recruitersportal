async function getEmployees() {
	const apiGetEmployeesResult = await fetch('api/employee/list', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		credentials: 'same-origin',
		method: 'GET',
	});
	return await apiGetEmployeesResult.json();
}


async function searchEmployees(searchTerm) {
	if(!searchTerm){
		searchTerm='';
	}
 

	const apiGetEmployeesResult = await fetch('api/employee/list?searchTerm='+searchTerm, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		credentials: 'same-origin',
		method: 'GET',
	});
	return await apiGetEmployeesResult.json();
}

async function addEmployee(employee) {
	const apiAddEmployeeResult = await fetch('/api/employee/', {
		body: JSON.stringify(employee),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		credentials: 'same-origin',
		method: 'POST',
	});
	return await apiAddEmployeeResult.json();
 }

async function updateEmployee(employee) {
	const apiUpdateEmployeeResult = await fetch('/api/employee/', {
		body: JSON.stringify(employee),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		credentials: 'same-origin',
		method: 'PUT',
	});
	return await apiUpdateEmployeeResult.json();
}

async function removeEmployee(employeeId) {
	const apiRemoveEmployeeResult = await fetch(`/api/employee/${employeeId}`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		credentials: 'same-origin',
		method: 'DELETE',
	});
	return await apiRemoveEmployeeResult.json();
}

 

export { getEmployees, searchEmployees, addEmployee, updateEmployee, removeEmployee };
