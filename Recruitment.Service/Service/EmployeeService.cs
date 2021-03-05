using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Recruitment.Core.Domain;
using Recruitment.Core.Model.Request;
using Recruitment.Core.Model.Response;
using Recruitment.Data.Interface;
using Recruitment.Service.Interface;
using Recruitment.Service.Utils;

namespace Recruitment.Service.Service
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        public async Task<ServiceResponseModel<List<Employee>>> GetEmployeesAsync()
        {
            var employees = await _employeeRepository.GetEmployeesAsync();

            return ServiceResponseUtil.GetServiceResponse(ServiceStatusCode.Success, employees);
        }

        public async Task<ServiceResponseModel> DeleteEmployeeAsync(int id)
        {
            var deleteStatus = await _employeeRepository.DeleteEmployeeAsync(id);
            return ServiceResponseUtil.GetServiceResponse(deleteStatus
                ? ServiceStatusCode.Success
                : ServiceStatusCode.Error);
        }

        public async Task<ServiceResponseModel<Employee>> UpdateEmployeeAsync(UpdateEmployeeModel updateEmployee)
        {
            if (updateEmployee.Id <= 0)
                return ServiceResponseUtil.GetServiceResponse(
                     ServiceStatusCode.InvalidId, new Employee());
            var updatedEmployee = await _employeeRepository.UpdateEmployeeAsync(updateEmployee);

            var updateStatus = updatedEmployee.Id > 0 ? ServiceStatusCode.Success : ServiceStatusCode.Error;
            return ServiceResponseUtil.GetServiceResponse(updateStatus, updatedEmployee);

        }

        public async Task<ServiceResponseModel<Employee>> AddEmployeeAsync(AddEmployeeModel addEmployee)
        {
            var newEmployee = await _employeeRepository.AddEmployeeAsync(addEmployee);

            var addNewEmployeeStatus = newEmployee.Id > 0 ? ServiceStatusCode.Success : ServiceStatusCode.Error;
            return ServiceResponseUtil.GetServiceResponse(addNewEmployeeStatus, newEmployee);
        }

        public async Task<ServiceResponseModel<List<Employee>>> SearchEmployeesAsync(string searchTerm)
        {

            var employees = await _employeeRepository.SearchEmployeesAsync(searchTerm);

            return ServiceResponseUtil.GetServiceResponse(ServiceStatusCode.Success, employees);
        }
    }
}
