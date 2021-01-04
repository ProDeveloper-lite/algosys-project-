using FluentMigrator.Runner;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OnlineQuizWebApp.SqlDbUtils;
using SqlKata.Compilers;
using SqlKata.Execution;

namespace OnlineQuizWebApp.AppConfigurators.DatabaseProviders
{
    public class SqlServerDatabaseProvider : IDatabaseProvider
    {
        private readonly string _connString;
        private readonly IServiceCollection _services;

        public SqlServerDatabaseProvider(IServiceCollection services, string connString)
        {
            _connString = connString;
            _services = services;
        }

        public void ConfigureAppDatabase()
        {
            _services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(_connString);
            });
        }

        public void ConfigureHangfireDatabase()
        {
            _services.AddHangfireSqlServer(_connString);
        }

        public void ConfigureSqlKata()
        {
            _services.AddScoped(sp
                => new QueryFactory(new SqlConnection(_connString), new SqlServerCompiler()));
        }

        public void ConfigureFluentMigration()
        {
            _services.AddFluentMigratorCore()
                .ConfigureRunner(x => x.AddSqlServer().WithGlobalConnectionString(_connString));
        }
    }
}
