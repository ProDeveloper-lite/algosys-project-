using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OnlineQuizWebApp.Modules.QuestionDetailBL;
using OnlineQuizWebApp.Modules.QuizDetailBL;
using OnlineQuizWebApp.Modules.QuizOptionsBL;

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
            services.AddTransient<IQuestionDetailService, QuestionDetailService>();
            services.AddTransient<IQuizOptionsService, QuizOptionsService>();
        }
    }
}
