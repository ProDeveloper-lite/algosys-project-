using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OnlineQuizWebApp.Modules.Quiz.EnglishQuizBL;

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
            services.AddTransient<IEnglishQuizService, EnglishQuizService>();
        }
    }
}
