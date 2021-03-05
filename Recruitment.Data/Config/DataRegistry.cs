using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Recruitment.Data.Interface;
using Recruitment.Data.Repository;

namespace Recruitment.Data.Config
{
    public static class DataRegistry
    {
        public static void RegisterDependencies(IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IEmployeeRepository, EmployeeRepository>();

        }
    }
}
