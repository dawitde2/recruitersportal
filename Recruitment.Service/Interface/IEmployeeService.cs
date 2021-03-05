using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Recruitment.Core.Domain;
using Recruitment.Core.Model;
using Recruitment.Core.Model.Request;
using Recruitment.Core.Model.Response;

namespace Recruitment.Service.Interface
{
    public interface IEmployeeService
    {
        Task<ServiceResponseModel<List<Employee>>> GetEmployeesAsync();
        Task<ServiceResponseModel> DeleteEmployeeAsync(int id);
        Task<ServiceResponseModel<Employee>> UpdateEmployeeAsync(UpdateEmployeeModel updateEmployee);
        Task<ServiceResponseModel<Employee>> AddEmployeeAsync(AddEmployeeModel addEmployee);
        Task<ServiceResponseModel<List<Employee>>> SearchEmployeesAsync(string searchTerm);

    }
}
