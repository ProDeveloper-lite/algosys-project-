using Microsoft.Extensions.DependencyInjection;
using OnlineQuizWebApp.AppConfigurators.DatabaseProviders;
using OnlineQuizWebApp.AppSettings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.AppConfigurators
{
    public static class DatabaseConfigurator
    {
        public static void ConfigureDatabase(this IServiceCollection services, AppConnectionString connectionString)
        {
            var dbProvider = DatabaseProviderFactory(services, connectionString);
            dbProvider.ConfigureAppDatabase();
            // dbProvider.ConfigureHangfireDatabase();
            //dbProvider.ConfigureSqlKata();
            dbProvider.ConfigureFluentMigration();
        }

        private static IDatabaseProvider DatabaseProviderFactory(IServiceCollection services, AppConnectionString connectionString)
        {
            switch (connectionString.DatabaseType)
            {
                case AppConnectionString.SupportedDatabaseTypes.SqlServer:
                    return new SqlServerDatabaseProvider(services, connectionString.Database);
                //case AppConnectionString.SupportedDatabaseTypes.SqLite:
                //    return new SqLiteDatabaseProvider(services, connectionString.Database);
                default:
                    throw new ArgumentException(nameof(connectionString.DatabaseType));
            }
        }
    }
}
