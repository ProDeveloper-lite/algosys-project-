using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.AppConfigurators.DatabaseProviders
{
    public interface IDatabaseProvider
    {
        void ConfigureAppDatabase();
        void ConfigureHangfireDatabase();
        void ConfigureSqlKata();
        void ConfigureFluentMigration();
    }
}
