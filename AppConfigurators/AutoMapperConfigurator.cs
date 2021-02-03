using System;
using System.Collections.Generic;
using System.Globalization;
using System.Reflection;
using AutoMapper;
using OnlineQuizWebApp.Modules.QuizDetailBL;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace OnlineQuizWebApp.AppConfigurators
{
    public static class AutoMapperConfigurator
    {
        public static List<Assembly> AutomapperAssemblies =>
           new List<Assembly>
           {
                Assembly.GetAssembly(typeof(QuizDetailMapper)), // QuizDetail
                Assembly.GetAssembly(typeof(Startup)) // web-api
           };

        public static void AddAutoMapperAssemblies(this IServiceCollection services)
        {
            services.AddAutoMapper(AutomapperAssemblies);
        }

        public static void ValidateAutoMapper(this IApplicationBuilder app)
        {
            var automapper = app.ApplicationServices.GetRequiredService<IMapper>();
            automapper.ConfigurationProvider.AssertConfigurationIsValid();
        }
    }

    [UsedImplicitly]
    public class SharedMappings : Profile
    {
        public SharedMappings()
        {
            CreateMap<int, string>().ConvertUsing(s => s.ToString(CultureInfo.InvariantCulture));
            CreateMap<string, int>().ConvertUsing(s => int.Parse(s, CultureInfo.InvariantCulture));
            //CreateMap<DateTime, string>().ConvertUsing(s => s.ConvertToString());
            //CreateMap<string, List<string>>().ConvertUsing(s => JsonConvert.DeserializeObject<List<string>>(s));
            //CreateMap<List<string>, string>().ConvertUsing(s => JsonConvert.SerializeObject(s));
        }
    }
}
