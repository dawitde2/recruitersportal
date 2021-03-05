﻿using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace Recruitment.Core.Model.Request
{
    public class AddEmployeeModel
    {
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int ManagerId { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Designation { get; set; }
        public string Department { get; set; }
        public decimal HourlyRate { get; set; }
    }
}
