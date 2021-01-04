using Hangfire;
using Hangfire.Console;
using Hangfire.MemoryStorage;
using Hangfire.SqlServer;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace OnlineQuizWebApp.AppConfigurators
{
    public static class HangfireConfigurator
    {
        public static void AddHangfireSqlServer(this IServiceCollection services, string connStr)
        {
            services.AddHangfire(x =>
            {
                x.UseSqlServerStorage(connStr, GetDefaultHangfireSqlServerOptions());
                x.ConfigureHangfireServer();
                x.UseConsole();
            });
            services.AddHangfireServer();
        }

        private static void ConfigureHangfireServer(this IGlobalConfiguration configuration)
        {
            configuration.SetDataCompatibilityLevel(CompatibilityLevel.Version_170);
            configuration.UseSimpleAssemblyNameTypeSerializer();
            configuration.UseRecommendedSerializerSettings();
        }

        public static void AddHangfireSqlLite(this IServiceCollection services)
        {
            services.AddHangfire(x => x.UseMemoryStorage());
            services.AddHangfireServer();
        }

        private static SqlServerStorageOptions GetDefaultHangfireSqlServerOptions()
        {
            return new SqlServerStorageOptions
            {
                CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                QueuePollInterval = TimeSpan.FromMinutes(1),
                UseRecommendedIsolationLevel = true,
                UsePageLocksOnDequeue = true,
                DisableGlobalLocks = true
            };
        }
    }
}
