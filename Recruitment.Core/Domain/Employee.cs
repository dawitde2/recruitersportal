using System;
using Newtonsoft.Json;

namespace Recruitment.Core.Domain
{
    public class Employee : IEquatable<Employee>
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int ManagerId { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Department { get; set; }
        public string Designation { get; set; }

        public decimal HourlyRate { get; set; }
        [JsonIgnore]
        public string FullText => $"{FirstName}{LastName}{Department}{HourlyRate}";
        

        public override bool Equals(object obj)
        {
            if (obj == null) return false;
            Employee objAsEmployee = obj as Employee;
            if (objAsEmployee == null) return false;
            else return Equals(objAsEmployee);
        }
        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }
        public bool Equals(Employee other)
        {
            if (other == null) return false;
            return (this.Id.Equals(other.Id));
        }

    }

}
