using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using OnlineQuizWebApp.JsonConvertor;

namespace OnlineQuizWebApp.AppConfigurators
{
    public static class JsonConfigurator
    {
        public static void ConfigureJsonNet(MvcNewtonsoftJsonOptions options)
        {
            options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
            options.SerializerSettings.Converters.Add(new StringEnumConverter());
            options.SerializerSettings.Converters.Add(new DateFormatConverter());
        }
    }
}
