using System;
using System.Collections.Generic;
using System.Text;
using Recruitment.Core.Model.Response;

namespace Recruitment.Service.Utils
{
    public class ServiceResponseUtil
    {

        public static ServiceResponseModel<T> GetServiceResponse<T>(ServiceStatusCode statusCode, T responseModel)
        {
            return new ServiceResponseModel<T>
            {
                ResponseStatusCode = statusCode,
                Result = responseModel,
                ResponseMessage =   GetStatusMessage(statusCode) ,
                IsSuccess = statusCode == ServiceStatusCode.Success

            };
        }

        public static ServiceResponseModel GetServiceResponse(ServiceStatusCode statusCode)
        {
            return new ServiceResponseModel
            {
                ResponseStatusCode = statusCode,
                ResponseMessage = GetStatusMessage(statusCode),
                IsSuccess = statusCode == ServiceStatusCode.Success

            };
        }


        public static string GetStatusMessage(ServiceStatusCode serviceStatusCode)
        {
            switch (serviceStatusCode)
            {
                case ServiceStatusCode.Success:
                    return "Success.";
                case ServiceStatusCode.Error:
                    return "Error occurred.";
                case ServiceStatusCode.InvalidId:
                    return "Id provided is not valid.";
                default:
                    return "";
            }
        }
    }
}
