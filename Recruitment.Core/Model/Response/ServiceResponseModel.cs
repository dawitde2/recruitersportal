using System.Collections.Generic;

namespace Recruitment.Core.Model.Response
{
    public class ServiceResponseModel<T> : ServiceResponseModel
    {
        public T Result { get; set; }
    }

    public class ServiceResponseModel
    {
        public ServiceStatusCode ResponseStatusCode { get; set; }

        public int ResponseCode { get { return (int)ResponseStatusCode; } }
        public string ResponseMessage { get; set; }
        public bool IsSuccess { get; set; }
    }

  
}
