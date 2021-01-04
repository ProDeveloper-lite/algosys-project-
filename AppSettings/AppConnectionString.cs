using Microsoft.Extensions.Configuration;
using OnlineQuizWebApp.Extenstions;

namespace OnlineQuizWebApp.AppSettings
{
    public class AppConnectionString
    {
        public enum SupportedDatabaseTypes
        {
            Undefined,
            SqlServer,
            SqLite
        }

        private const string DatabaseKeyName = "Database";
        private const string AzureStorageKeyName = "AzureStorage";
        private const string SendGridApiKeyName = "SendGridApiKey";
        private const string AppInsightKeyName = "AppInsightKey";

        public string AzureStorage { get; }
        public string Database { get; }
        public string SendGridKey { get; }
        public string AppInsightKey { get; }
        public SupportedDatabaseTypes DatabaseType { get; }

        public AppConnectionString(IConfiguration configuration)
        {
            AzureStorage = configuration.GetConnectionString(AzureStorageKeyName);
            Database = configuration.GetConnectionString(DatabaseKeyName);
            SendGridKey = configuration.GetConnectionString(SendGridApiKeyName);
            AppInsightKey = configuration.GetConnectionString(AppInsightKeyName);
            DatabaseType = EnumUtils<SupportedDatabaseTypes>.Parse(configuration.GetConnectionString("DatabaseType"));
        }
    }
}
