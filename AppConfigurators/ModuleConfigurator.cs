using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OnlineQuizWebApp.Modules.QuizDetailBL;
using OnlineQuizWebApp.Modules.QuizOptionBL;
using OnlineQuizWebApp.Modules.SubjectDetailBL;

namespace OnlineQuizWebApp.AppConfigurators
{
    public static class ModuleConfigurator
    {
        public static void AddApplicationModules(this IServiceCollection services, IHostEnvironment environment)
        {
            services.RegisterQuizModuleDependencies();
        }

        public static void RegisterQuizModuleDependencies(this IServiceCollection services)
        {
            services.AddTransient<IQuizDetailService, QuizDetailService>();
            services.AddTransient<IQuizOptionsService, QuizOptionsService>();
            services.AddTransient<ISubjectDetailService, SubjectDetailService>();
        }
    }
}
