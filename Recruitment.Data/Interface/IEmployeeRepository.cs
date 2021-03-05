using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Recruitment.Core.Domain;
using Recruitment.Core.Model.Request;

namespace Recruitment.Data.Interface
{
    public interface IEmployeeRepository
    {
        Task<List<Employee>> GetEmployeesAsync();
        Task<List<Employee>> SearchEmployeesAsync(string searchTerm);

        Task<bool> DeleteEmployeeAsync(int id);
        Task<Employee> UpdateEmployeeAsync(UpdateEmployeeModel updateEmployee);
        Task<Employee> AddEmployeeAsync(AddEmployeeModel employee);

    }
}
