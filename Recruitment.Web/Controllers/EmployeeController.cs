using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Recruitment.Core.Domain;
using Recruitment.Core.Model.Request;
using Recruitment.Core.Model.Response;
using Recruitment.Service.Interface;

namespace Recruitment.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly IEmployeeService _employeeService;
        private readonly ILogger<EmployeeController> _logger;

        public EmployeeController(IEmployeeService employeeService, ILogger<EmployeeController> logger)
        {
            _employeeService = employeeService;
            _logger = logger;
        }

        [HttpGet("list")]
        public async Task<ServiceResponseModel<List<Employee>>> SearchEmployee([FromQuery] string searchTerm)
        {
            return await _employeeService.SearchEmployeesAsync(searchTerm);
        }


        [HttpPost]
        public async Task<ServiceResponseModel<Employee>> AddEmployee(AddEmployeeModel addEmployeeModel)
        {
            return await _employeeService.AddEmployeeAsync(addEmployeeModel);
        }

        [HttpPut]
        public async Task<ServiceResponseModel<Employee>> UpdateEmployee(UpdateEmployeeModel updateEmployeeModel)
        {
            return await _employeeService.UpdateEmployeeAsync(updateEmployeeModel);
        }

        [HttpDelete("{id}")]
        public async Task<ServiceResponseModel> DeleteEmployee(int id)
        {
            return await _employeeService.DeleteEmployeeAsync(id);
        }

    }
}
