
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
