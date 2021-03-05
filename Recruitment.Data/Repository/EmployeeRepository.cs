using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Recruitment.Core.Domain;
using Recruitment.Core.Model.Request;
using Recruitment.Data.Interface;

namespace Recruitment.Data.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly string _path;

        public EmployeeRepository()
        {
            _path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Repository/employee-repository.json");
        }


        public async Task<List<Employee>> GetEmployeesAsync()
        {
            var listOfEmployee = JsonConvert.DeserializeObject<List<Employee>>(File.ReadAllText(_path));

            return await Task.FromResult((listOfEmployee));
        }

        public async Task<List<Employee>> SearchEmployeesAsync(string searchTerm)
        {

            var employeeList = await GetEmployeesAsync();

            var filteredEmployeeList = (from e in employeeList
                                        where string.IsNullOrWhiteSpace(searchTerm) || e.FullText.IndexOf(searchTerm,StringComparison.OrdinalIgnoreCase)!=-1
                                          
                                        select e).ToList();

            return filteredEmployeeList;

        }

        public async Task<bool> DeleteEmployeeAsync(int id)
        {
            var employeeList = await GetEmployeesAsync();

            var employee = employeeList.FirstOrDefault(e => e.Id == id);


            if (employee == null) return false;

            employeeList.Remove(employee);

            SaveEmploye(employeeList);

            return true;



        }

        public async Task<Employee> UpdateEmployeeAsync(UpdateEmployeeModel updateEmployeeModel)
        {
            var employeeList = await GetEmployeesAsync();
            var employee = employeeList.FirstOrDefault(e => e.Id == updateEmployeeModel.Id);
            if (employee == null) return new Employee();
            employee.FirstName = updateEmployeeModel.FirstName;
            employee.LastName = updateEmployeeModel.LastName;
            employee.ManagerId = updateEmployeeModel.ManagerId;
            employee.DateOfBirth = updateEmployeeModel.DateOfBirth;
            employee.Designation = updateEmployeeModel.Designation;
            employee.StartDate = updateEmployeeModel.StartDate;
            employee.EndDate = updateEmployeeModel.EndDate;
            employee.Department = updateEmployeeModel.Department;
            employee.HourlyRate = updateEmployeeModel.HourlyRate;

            SaveEmploye(employeeList);

            return employee;

        }

        public async Task<Employee> AddEmployeeAsync(AddEmployeeModel addEmployeeModel)
        {
            var employeeList = await GetEmployeesAsync();

            if (addEmployeeModel == null)
            {
                return new Employee();
            }


            var employee = new Employee()
            {
                Id = employeeList.Max(i => i.Id) + 1,
                FirstName = addEmployeeModel.FirstName,
                LastName = addEmployeeModel.LastName,
                DateOfBirth = addEmployeeModel.DateOfBirth,
                StartDate = addEmployeeModel.StartDate,
                EndDate = addEmployeeModel.EndDate,
                Department = addEmployeeModel.Department,
                Designation = addEmployeeModel.Designation,
                ManagerId = addEmployeeModel.ManagerId,
                HourlyRate = addEmployeeModel.HourlyRate
            };


            employeeList.Add(employee);

            SaveEmploye(employeeList);

            return employee;


        }

        private void SaveEmploye(List<Employee> employeeList)
        {
            var content = JsonConvert.SerializeObject(employeeList);
            File.WriteAllText(_path, content);
        }
    }
}
