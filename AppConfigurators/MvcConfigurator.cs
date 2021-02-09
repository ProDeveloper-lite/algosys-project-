using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.DependencyInjection;

namespace OnlineQuizWebApp.AppConfigurators
{
    public static class MvcConfigurator
    {
        public static void ConfigureMvc(this IServiceCollection services)
        {
            services
                .AddControllers(options => {  })
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddNewtonsoftJson(JsonConfigurator.ConfigureJsonNet)
                .AddFluentValidation(FluentValidationConfigurator.Configure);
        }
        public static void ConfigureMvc(this IApplicationBuilder app)
        {
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(route => route.MapControllerRoute("api", "api/{controller}/{action?}/{id?}/{value?}"));
        }
    }
}
