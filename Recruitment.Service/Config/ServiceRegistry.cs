using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Recruitment.Data.Interface;
using Recruitment.Service.Interface;
using Recruitment.Service.Service;

namespace Recruitment.Service.Config
{
    public static class ServiceRegistry
    {
        public static void RegisterDependencies(IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IEmployeeService, EmployeeService>();

        }
    }
}
